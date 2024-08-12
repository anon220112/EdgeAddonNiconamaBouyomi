const port = '50080';
var isSending = false;

// コメント欄（MutationObserverの対象）
const targetNode = document.querySelector('[data-name="comment"] > div > div > div');

// 連携開始/停止ボタン押下
function onStartStopClick() {
    isSending = !isSending;
    if(isSending) {
        if (targetNode) {
            document.getElementById('btnStartStop').innerText = '棒読み連携停止';
            document.getElementById('btnStartStop').style.backgroundColor = 'red';
            // コメント欄監視開始
            observer.observe(targetNode, { childList: true, attributes: false, characterData: false, subtree: false });
        }
    }
    else{
        document.getElementById('btnStartStop').innerText = '棒読み連携開始';
        document.getElementById('btnStartStop').style.backgroundColor = 'blue';
        // コメント欄監視停止
        observer.disconnect();
    }
}

// 連携開始/停止ボタン
const textStartStopButton = 
    `<div style="position:absolute;left:0;top:0; width:100%; height:100%;pointer-events:none;display:flex; justify-content: flex-end;align-items: flex-end;background-color: transparent;">
        <button id="btnStartStop" style="position: relative;pointer-events:auto; width: 10rem; height: 3rem; margin-right: 0.5rem; margin-bottom: 0.5rem; 
        background-color: blue; color: white; font-size: 1.2rem;">棒読み連携開始</button>
    </div>
    `;

// ボタン追加実行
document.querySelector('[data-view-mode="watch"]').insertAdjacentHTML('beforeend', textStartStopButton);
document.getElementById('btnStartStop').addEventListener("click", onStartStopClick, false);
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));//timeはミリ秒

var lastCommentNumber = -1;

// MutationObserverのコールバック
const callback = async function(mutationsList, observer) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            mutation.addedNodes.forEach(async node => {
                try{
                    const commentNumber = node.querySelector('.comment-number').innerText;
                    const commentText = node.querySelector('.comment-text').innerText;
                    if(commentNumber == '' ||　parseInt(commentNumber) > lastCommentNumber){
                        if(commentNumber != ''){
                            lastCommentNumber = parseInt(commentNumber);
                        }
                        chrome.runtime.sendMessage({ action: 'bouyomi', data: commentText }, (response) => {
                            if (response.data) {
                                // console.log('bouyomi OK:', commentNumber, commentText);
                            } else if (response.error) {
                                console.error('bouyomi NG:', commentNumber, commentText);
                            }
                        });
                        await sleep(10);
                    }
                }catch(e){
                    console.error("ERROR", e);
                }
            });
        }
    }
};

const observer = new MutationObserver(callback);

