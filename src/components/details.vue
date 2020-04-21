<template>

    <div class=".container-fluid" style="padding: 0;margin-right: 9%;margin-left: 9%;">
        <!--        头部-->
        <div class="row">
            <div class="col-md-12">
                <nav class="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
                    <a class="btn btn-outline-success border-0" style="color: aliceblue;"
                       role="button" v-on:click="headerNav">首页</a>
                    <a class="btn btn-outline-success border-0" style="color: aliceblue" href="#"
                       role="button" v-on:click="headerNav">美食做法</a>
                    <a class="btn btn-outline-success  border-0" style="color: aliceblue" href="#"
                       role="button" v-on:click="headerNav">美文美食</a>
                    <a class="btn btn-outline-success  border-0" style="color: aliceblue" href="#"
                       role="button" v-on:click="headerNav">西南地区美食小吃</a>
                    <a class="btn btn-outline-success  border-0" style="color: aliceblue" href="#"
                       role="button" v-on:click="headerNav">东北地区美食小吃</a>
                    <a class="btn btn-outline-success  border-0" style="color: aliceblue" href="#"
                       role="button" v-on:click="headerNav">西北地区美食小吃</a>
                    <a class="btn btn-outline-success  border-0" style="color: aliceblue" href="#"
                       role="button" v-on:click="headerNav">东南地区美食小吃</a>
                    <a class="btn btn-outline-success  border-0" style="color: aliceblue" href="#"
                       role="button" v-on:click="headerNav">特产介绍</a>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">

                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    更多
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">敬请期待</a>
                                    <a class="dropdown-item" href="#">敬请期待</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">敬请期待</a>
                                </div>
                            </li>
                        </ul>
                        <!--搜索框-->
                        <form class="form-inline my-2 my-lg-0">
                            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </div>
        </div>
        <!--主体-->
        <div class="row">
            <!--            左边-->
            <div class="col-md-8" v-bind="detailModel">

                <!--                主体内容-->
                <div class="card mb-3">
                    <h6 class="card-title">{{detailModel.title}}</h6>
                    <span>{{detailModel.title}}   {{detailModel.public_time}}  {{detailModel.watch}}  {{detailModel.comments}}</span>

                    <div class="card-body">
                        <p class="card-text" style="font-size: 13px">
                            {{detailModel.content}}
                        </p>
                        <img class="card-img-top" src="../assets/one.jpg" alt=""/>
                    </div>
                </div>
                <!-- 左边-->
            </div>

            <!--右边-->
            <div class="col-md-4">
                <!--    文章-->
                <div class="list-group">
                    <li class="list-group active">
                        <div class="btn-group " id="mygroup1" role="group" aria-label="Basic example">
                            <a class="btn btn-outline-success border-0 wenzhanglist"
                               href="#" role="button" id="zuixin" @mouseover="RightNav">最新文章</a>
                            <a class="btn btn-outline-success border-0 wenzhanglist"
                               href="#" role="button" id="repin" @mouseover="RightNav">热评文章</a>
                            <a class="btn btn-outline-success border-0 wenzhanglist"
                               href="#" role="button" id="suiji" @mouseover="RightNav">随机文章</a>
                        </div>
                    </li>

                    <li class="list-group" id="zuixinli">
                        <a href="#" class="list-group-item list-group-item-action">1111111</a>
                        <a href="#" class="list-group-item list-group-item-action">美食做法</a>
                        <a href="#" class="list-group-item list-group-item-action">美食做法</a>
                    </li>

                    <li class="list-group" STYLE="display: none" id="repinli">
                        <a href="#" class="list-group-item list-group-item-action">2222222</a>
                        <a href="#" class="list-group-item list-group-item-action">美食做法</a>
                        <a href="#" class="list-group-item list-group-item-action">美食做法</a>
                    </li>
                    <li class="list-group" STYLE="display: none" id="suijili">
                        <a href="#" class="list-group-item list-group-item-action">3333333</a>
                        <a href="#" class="list-group-item list-group-item-action">美食做法</a>
                        <a href="#" class="list-group-item list-group-item-action">美食做法</a>
                    </li>
                </div>

                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action active">
                        网站分类
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">美食做法</a>
                    <a href="#" class="list-group-item list-group-item-action">西南地区美食小吃</a>
                    <a href="#" class="list-group-item list-group-item-action">西北地区美食小吃</a>
                    <a href="#" class="list-group-item list-group-item-action ">特产介绍</a>
                    <a href="#" class="list-group-item list-group-item-action ">美文美食</a>
                    <a href="#" class="list-group-item list-group-item-action ">东北地区小吃</a>
                    <a href="#" class="list-group-item list-group-item-action ">东南地区美食小吃</a>
                </div>
                <div class="list-group">
                    <a href="#" class="list-group-item list-group-item-action active">
                        最近发表
                    </a>
                    <a href="#" class="list-group-item list-group-item-action">陕西美食小吃之临潼火晶柿子</a>
                    <a href="#" class="list-group-item list-group-item-action">陕西特产之延川红枣</a>
                    <a href="#" class="list-group-item list-group-item-action">陕西特产之洛南核桃</a>
                    <a href="#" class="list-group-item list-group-item-action ">陕西特产之镇安大板栗</a>
                    <a href="#" class="list-group-item list-group-item-action ">陕西特产之临潼石榴</a>
                    <a href="#" class="list-group-item list-group-item-action ">陕西美食小吃之木磨丝</a>
                    <a href="#" class="list-group-item list-group-item-action ">陕西美食小吃之柿子糊塌</a>
                    <a href="#" class="list-group-item list-group-item-action ">陕西美食小吃之油茶炒面</a>
                    <a href="#" class="list-group-item list-group-item-action ">陕西美食小吃之宰羔肉</a>
                    <a href="#" class="list-group-item list-group-item-action ">陕西美食小吃之贵妃饼</a>
                </div>

                <!--                标签列表-->
                <ul class="list-group">
                    <a href="#" class="list-group-item list-group-item-action active">
                        标签列表
                    </a>
                    <li class="list-group-item">
                        <a class="btn btn-success border-0 wenzhanglist"
                           href="#" role="button">美文美食</a>
                        <a class="btn btn-success border-0 wenzhanglist"
                           href="#" role="button">美食做法</a>
                        <a class="btn btn-success border-0 wenzhanglist"
                           href="#" role="button">特色小吃</a>
                        <a class="btn btn-success border-0 wenzhanglist"
                           href="#" role="button">特产介绍</a>
                    </li>
                </ul>

                <!--右边-->
            </div>

            <!-- 主体-->
        </div>

    </div>

</template>
<script>

    import $ from 'jquery'

    export default {
        data() {
            return {
                detailModel: ""
            }
        },
        methods:
            {
                RightNav(e) {
                    var tab = $(e.target).html()
                    if (tab === "最新文章") {
                        $("#zuixinli").show()
                        $("#repinli").hide()
                        $("#suijili").hide()
                    } else if (tab === "热评文章") {
                        $("#repinli").show()
                        $("#zuixinli").hide()
                        $("#suijili").hide()
                    } else {
                        $("#suijili").show()
                        $("#repinli").hide()
                        $("#zuixinli").hide()
                    }
                },
                headerNav(e) {
                    var tab = $(e.target).html()
                    this.$http.get("http://localhost:8081/user/nav?" + "which=" + tab)
                        .then(data => {
                            this.indexMode = data['data']['data']['records'];
                            console.log(this.indexMode)
                        }).catch(function (err) {
                        console.log(err)
                    })
                }

            }
    }


</script>
<style>
    .wenzhanglist {
        margin-left: 13px;
        margin-right: 13px;
    }

    .fa-heart {
        font-size: 2rem;
        color: #ddd;
        cursor: pointer;
        transition: transform 0.5s;
    }

    .like {
        color: red;
    }

    .fa-heart:active {
        color: red;
        transform: scale(2, 2);
        transition: transform 0.1s;
    }
</style>