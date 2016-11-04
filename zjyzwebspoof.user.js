/// <reference path="./typings/jquery/jquery.d.ts" />
// ==UserScript==
// @id             zjyzwebspoof
// @name           ZJYZWebSpoof
// @version        0.0.0.1
// @namespace      http://www.samerions.net
// @description    A funny content replacement for ZJYZ Website.
// @include        http://www.zjyz.org/*
// @match          http://www.zjyz.org/*
// @include        http://chengji.zjyz.org/*
// @grant          none
// ==/UserScript==

//For www.zjyz.org
fixLink();
function fixLink(){
    //fix grade query link
    var gradeLink = $("a[href='http://chengji.zjyz.edu/student/index/login.html']");
    gradeLink.attr("href", "http://chengji.zjyz.org/student/index/login.html");

    
    //add internal network link
    var submenu = $("#submenu");
    var intmnu1 = submenu.add("<ul class=\"menul\"></ul>");
    intmnu1.add("<li><a href=\"http://www.zjyz.org/eval/\" target=\"_blank\" style=\"color: rgb(255, 255, 255);\"><i class=\"fa fa-angle-right\"></i> 信息竞赛</a></li>");
}


//For chengji.zjyz.org