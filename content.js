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
    `<div style="position relative; width:100%; height:100%;display:flex; justify-content: flex-end;align-items: flex-end;">
        <button id="btnStartStop" style="position: relative; width: 10rem; height: 3rem; margin-right: 0.5rem; margin-bottom: 0.5rem; 
        background-color: blue; color: white; font-size: 1.2rem;">棒読み連携開始</button>
    </div>
    `;

// ボタン追加実行
document.getElementById('akashic-gameview').insertAdjacentHTML('afterbegin', textStartStopButton);
document.getElementById('btnStartStop').addEventListener("click", onStartStopClick, false);

var lastCommentNumber = -1;

// MutationObserverのコールバック
const callback = async function(mutationsList, observer) {
    for (let mutation of mutationsList) {
        if (mutation.type === 'childList') {
            for(idx in mutation.target.children){
                node = mutation.target.children[idx];
                const commentNumber = parseInt(node.querySelector('.comment-number').innerText);
                const commentText = node.querySelector('.comment-text').innerText;
                if(commentNumber > lastCommentNumber){
                    lastCommentNumber = commentNumber;
                    let param = new URLSearchParams();
                    param.set('text', commentText);
                    navigator.sendBeacon('http://localhost:50080/Talk', param);
                    console.log('comment', commentNumber, commentText);
                }
            };
        }
    }
};

const observer = new MutationObserver(callback);

