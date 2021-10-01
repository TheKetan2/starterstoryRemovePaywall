let attrs = ["p","h3","blockquote","ul","div"];
for(let attr of attrs){
    $(attr).removeClass("paywalled");
    $(attr).removeClass("fadeout");
    $(attr).removeClass("paywall-block");
}
