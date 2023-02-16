import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を初期化し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createincompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromImcompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createincompleteList = (text) => {
  //liタグ生成
  const li = document.createElement("li");

  //divタグ生成
  const div = document.createElement("div");
  div.className = "list-low";

  //Pタグ生成
  const p = document.createElement("p");
  p.className = "todo-name";
  p.innerText = text;

  //button（完了）タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された完了ボタンの親タグ（div）の親タグ（li）を未完了リストから削除
    const completeTarget_div = completeButton.parentNode;
    const completeTarget_li = completeTarget_div.parentNode;
    deleteFromImcompleteList(completeTarget_li);

    //関数化したので削除
    //未完了ulの子要素のliを消したいのでulの要素取得してremoveChildで子要素を削除
    //document.getElementById("incomplete-list").removeChild(completeTarget_li);

    //完了リストに追加するdiv
    const addTarget_div = completeButton.parentNode;

    //完了リストに追加するdivの親要素であるli
    const addTarget_li = addTarget_div.parentNode;

    //TODO内容テキストを取得
    const text = addTarget_div.firstChild.innerText;

    //div以下を初期化
    addTarget_div.textContent = null;

    //pタグの生成
    const p = document.createElement("p");
    p.innerText = text;

    //buttonタグ生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻すボタンの親タグ（div）を完了リストから削除
      const deleteTarget_div = backButton.parentNode;
      const deleteTarget_li = deleteTarget_div.parentNode;
      document.getElementById("complete-list").removeChild(deleteTarget_li);

      //テキスト取得
      const text = backButton.parentNode.firstChild.innerText;
      createincompleteList(text);
    });

    //liタグ配下にdivタグをdivタグ配下にpタグを設定
    addTarget_div.appendChild(p);
    addTarget_div.appendChild(backButton);
    //完了リストの範囲であるulタグ内に追加
    document.getElementById("complete-list").appendChild(addTarget_li);
  });

  //button（削除）タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div）の親タグ（li）を未完了リストから削除

    const deleteTarget_div = deleteButton.parentNode;
    const deleteTarget_li = deleteTarget_div.parentNode;
    deleteFromImcompleteList(deleteTarget_li);

    //関数化したので削除
    //未完了ulの子要素のliを消したいのでulの要素取得してremoveChildで子要素を削除
    //document.getElementById("incomplete-list").removeChild(deleteTarget_li);
  });
  //liタグの子要素にdivタグを設定
  //divタグの子要素にpタグとbuttonタグを設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストの範囲であるulタグ内に追加;
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
