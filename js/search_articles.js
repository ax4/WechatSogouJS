function NextPage() {
    var temp = document.getElementsByTagName("a").sogou_next.href;
    localStorage.nextpage = temp;
    window.location.href = temp;
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
        else{
            temp.push(null)
        }
    });

    return temp;
}

function getArticles_AccountHref() {
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
        else{
            temp.push(null)
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
        else{
            temp.push(null)
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
        else{
            temp.push(null)
        }
    });

    return temp;
}

function getArticlesView() {
    var temp = []
    var s_p_tags = document.getElementsByClassName("s-p");
    var s_p = [].slice.call(s_p_tags);
    var titles = []
    s_p.forEach(function(e){
        titles.push(e.getElementsByClassName("s1")[0])
    })

    while (titles.length<10){
        titles.push(null)
    }
    //var view_tags = document.getElementsByClassName("s1");
    //var titles = [].slice.call(view_tags);
    titles.forEach(function (e) {
        if (e) {
            temp.push(e.innerHTML)
        }
        else{
            temp.push(null)
        }
    });

    return temp;
}

function getArticlesTime() {
    var temp = []
    var s_p_tags = document.getElementsByClassName("s-p");
    var s_p = [].slice.call(s_p_tags);
    var titles = []
    s_p.forEach(function(e){
        titles.push(e.getElementsByClassName("s2")[0])
    })

    while (titles.length<10){
        titles.push(null)
    }
    //var time_tags = document.getElementsByClassName("s2");
    //var titles = [].slice.call(time_tags);
    titles.forEach(function (e) {
        if (e) {
            temp.push(/([0-9])\d+/i.exec(e.innerHTML)[0])
        }
        else{
            temp.push(null)
        }
    });

    return temp;
}

function getArticles_AccountName() {
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
            temp.push(e.innerHTML)
        }
        else{
            temp.push(null)
        }
    });

    return temp;
}

/* unstable, never use in spider Task */
function getArticlesAll(){
    var title = getArticlesTitle()
    var href = getArticlesHref()
    var account_name = getArticles_AccountName()
    var account_href = getArticles_AccountHref()
    var summary = getArticlesSummary()
    var view = getArticlesView()
    var time = getArticlesTime()

    var _length_test = title.length + href.length + account_name.length + account_href.length + summary.length + view.length + time.length
    _length_test = _length_test / 7 
    if (_length_test!= title.length || _length_test!=href.length || _length_test!= account_name.length || _length_test!=account_href.length || _length_test!=summary.length || _length_test!=view.length || _length_test!=time.length){
        return alert("_length_test fail !! Miss match of items") //fixme: it should be better to stop the spider task
    }

    var temp = []
    for (var i = 0; i<_length_test; i++){
        //console.log(title[i], href[i], account_name[i], account_href[i], summary[i], view[i], time[i])
        temp.push({
            title: title[i], 
            href: href[i], 
            account_name: account_name[i], 
            account_href: account_href[i], 
            summary: summary[i], 
            view: view[i], 
            time: time[i]
        })

    }

    return temp;
}