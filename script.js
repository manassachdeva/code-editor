function run(){
    let htmlCode=document.getElementById("html-code").value;
    let csscode=document.getElementById("css-code").value;
    let jscode=document.getElementById("js-code").value;
    let output=document.getElementById("output");

    output.contentDocument.body.innerHTML=htmlCode+"<style>"csscode<"/style">;
    output.contentWindow.eval(jscode);
}