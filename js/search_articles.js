function NextPage(){
    window.location.href = document.getElementsByTagName("a").sogou_next.href;
}

function getArticlesHref(){
    var href = [];
    var a_tags = document.getElementsByTagName("a");
    var titles = [a_tags.sogou_vr_11002601_title_0,
                  a_tags.sogou_vr_11002601_title_1,
                  a_tags.sogou_vr_11002601_title_2,
                  a_tags.sogou_vr_11002601_title_3,
                  a_tags.sogou_vr_11002601_title_4,
                  a_tags.sogou_vr_11002601_title_5,
                  a_tags.sogou_vr_11002601_title_6,
                  a_tags.sogou_vr_11002601_title_7,
                  a_tags.sogou_vr_11002601_title_8,
                  a_tags.sogou_vr_11002601_title_9];
    titles.forEach(function(e){
        if (e){
            href.push(e.href)
        }
    });
    
    return href;
}

function getArticlesAccount(){
    var href = [];
    var a_tags = document.getElementsByTagName("a");
    var titles = [a_tags.sogou_vr_11002601_account_0,
                  a_tags.sogou_vr_11002601_account_1,
                  a_tags.sogou_vr_11002601_account_2,
                  a_tags.sogou_vr_11002601_account_3,
                  a_tags.sogou_vr_11002601_account_4,
                  a_tags.sogou_vr_11002601_account_5,
                  a_tags.sogou_vr_11002601_account_6,
                  a_tags.sogou_vr_11002601_account_7,
                  a_tags.sogou_vr_11002601_account_8,
                  a_tags.sogou_vr_11002601_account_9];
    titles.forEach(function(e){
        if (e){
            href.push(e.href)
        }
    });
    
    return href;
}