function NextPage() {
    window.location.href = document.getElementsByTagName("a").sogou_next.href;
}

function getArticlesHref() {
    var temp = [];
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
    titles.forEach(function (e) {
        if (e) {
            temp.push(e.href)
        }
    });

    return temp;
}

function getArticlesAccount() {
    var temp = [];
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
    titles.forEach(function (e) {
        if (e) {
            temp.push(e.href)
        }
    });

    return temp;
}

function getArticlesTitle() {
    var temp = [];
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
    titles.forEach(function (e) {
        if (e) {
            temp.push(e.innerHTML)
        }
    });

    return temp;
}

function getArticlesSummary() {
    var temp = [];
    var p_tags = document.getElementsByTagName("p");
    var titles = [p_tags.sogou_vr_11002601_summary_0,
    p_tags.sogou_vr_11002601_summary_1,
    p_tags.sogou_vr_11002601_summary_2,
    p_tags.sogou_vr_11002601_summary_3,
    p_tags.sogou_vr_11002601_summary_4,
    p_tags.sogou_vr_11002601_summary_5,
    p_tags.sogou_vr_11002601_summary_6,
    p_tags.sogou_vr_11002601_summary_7,
    p_tags.sogou_vr_11002601_summary_8,
    p_tags.sogou_vr_11002601_summary_9];
    titles.forEach(function (e) {
        if (e) {
            temp.push(e.innerHTML)
        }
    });

    return temp;
}

function getArticlesView() {
    var temp = []
    var view_tags = document.getElementsByClassName("s1");
    var titles = [].slice.call(view_tags);
    titles.forEach(function (e) {
        if (e) {
            temp.push(e.innerHTML)
        }
    });

    return temp;
}

function getArticlesTime() {
    var temp = []
    var time_tags = document.getElementsByClassName("s2");
    var titles = [].slice.call(time_tags);
    titles.forEach(function (e) {
        if (e) {
            temp.push(/([0-9])\d+/i.exec(e.innerHTML)[0])
        }
    });

    return temp;
}