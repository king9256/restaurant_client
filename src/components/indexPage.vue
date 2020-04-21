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
                                    <a class="dropdown-item" href="#">Share特产</a>
                                    <a class="dropdown-item" href="#">Share美食做法</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">发布美食美文</a>
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
            <div class="col-md-8">

                <div class="row">
                    <div class="col-md-12">
                        <!--                轮播图-->
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                            <ol class="carousel-indicators">
                                <li data-target="#carouselExampleControls" data-slide-to="0" class="active"></li>
                                <li data-target="#carouselExampleControls" data-slide-to="1"></li>
                                <li data-target="#carouselExampleControls" data-slide-to="2"></li>
                            </ol>

                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <img class="d-block  w-100 h-75" src="../assets/three.png"
                                         alt="First slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block  w-100 h-75" src="../assets/three.png" alt="Second slide">
                                </div>
                                <div class="carousel-item">
                                    <img class="d-block  w-100 h-75" src="../assets/three.png"
                                         alt="Third slide">
                                </div>
                            </div>
                            <a class="carousel-control-prev" href="#carouselExampleControls" role="button"
                               data-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                            </a>
                            <a class="carousel-control-next" href="#carouselExampleControls" role="button"
                               data-slide="next" style="margin-left: -5%">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                            </a>
                        </div>
                    </div>
                </div>

                <!--                主体内容-->
                <div class="row" v-bind="indexMode" v-for="item in indexMode" :key="item">

                    <div class="col-md-4">
                        <div class="card mb-3">
                            <img class="card-img-top" src="../assets/one.jpg" alt="" v-bind:id="item.id"
                                 v-on:click="detail"/>
                            <div class="card-body">
                                <router-link to='index.html'><button>点我到第二个页面</button></router-link>
                                <h6 class="card-title">{{item.title}}</h6>
                                <p class="card-text" style="font-size: 13px">
                                    {{item.introduction}}
                                </p>
                                <label> 2020-04-19 17:01 <i class="fas fa-heart float-right"></i></label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <img class="card-img-top" src="../assets/one.jpg" alt="" v-bind:id="item.id"
                                 v-on:click="detail"/>
                            <div class="card-body">
                                <h6 class="card-title">{{item.title}}</h6>
                                <p class="card-text" style="font-size: 13px">
                                    {{item.introduction}}
                                </p>
                                <label> 2020-04-19 17:01 <i class="fas fa-heart float-right"></i></label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <img class="card-img-top" src="../assets/one.jpg" alt="" v-bind:id="item.id"
                                 v-on:click="detail"/>
                            <div class="card-body">
                                <h6 class="card-title">{{item.title}}</h6>
                                <p class="card-text" style="font-size: 13px">
                                    {{item.introduction}}
                                </p>
                                <label> 2020-04-19 17:01 <i class="fas fa-heart float-right"></i></label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <img class="card-img-top" src="../assets/one.jpg" alt="" v-bind:id="item.id"
                                 v-on:click="detail"/>
                            <div class="card-body">
                                <h6 class="card-title">{{item.title}}</h6>
                                <p class="card-text" style="font-size: 13px">
                                    {{item.introduction}}
                                </p>
                                <label> 2020-04-19 17:01 <i class="fas fa-heart float-right"></i></label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <img class="card-img-top" src="../assets/one.jpg" alt="" v-bind:id="item.id"
                                 v-on:click="detail"/>
                            <div class="card-body">
                                <h6 class="card-title">{{item.title}}</h6>
                                <p class="card-text" style="font-size: 13px">
                                    {{item.introduction}}
                                </p>
                                <label> 2020-04-19 17:01 <i class="fas fa-heart float-right"></i></label>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="card mb-3">
                            <img class="card-img-top" src="../assets/one.jpg" alt="" v-bind:id="item.id"
                                 v-on:click="detail"/>
                            <div class="card-body">
                                <h6 class="card-title">{{item.title}}</h6>
                                <p class="card-text" style="font-size: 13px">
                                    {{item.introduction}}
                                </p>
                                <label> 2020-04-19 17:01 <i class="fas fa-heart float-right"></i></label>
                            </div>
                        </div>
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
                        <a href="#" class="list-group-item list-group-item-action">陕西美食小吃之临潼火晶柿子</a>
                        <a href="#" class="list-group-item list-group-item-action">陕西特产之延川红枣</a>
                        <a href="#" class="list-group-item list-group-item-action">陕西特产之洛南核桃</a>
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
        <div class="row" style="margin-right: auto;margin-left: auto;">
            <div class="col-md-12">

                <nav aria-label="Page navigation example">
                    <ul class="pagination justify-content-center">
                        <li class="page-item disabled">
                            <a class="page-link" href="#" tabindex="-1">Previous</a>
                        </li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item">
                            <a class="page-link" href="#">Next</a>
                        </li>
                    </ul>
                </nav>


            </div>
        </div>

    </div>

</template>
<script>

    import $ from 'jquery'
    import router from "@/router/router";

    export default {

        data() {
            return {
                router,
                form: {
                    name: '',
                    password: ''
                },
                indexMode: []
            }
        },
        methods:
            {
                onSubmit() {
                    this.$http.post("http://localhost:8081/admin/login", {
                        "name": this.name,
                        "password": this.password
                    }).then(function (res) {
                        var rec = res.data
                        console.log(rec['code'])
                    }).catch(function (err) {
                        console.log(err)
                    })
                },
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
                },
                detail(e) {
                    var taid = $(e.target).attr("id");
                    this.router.push({
                        path: "./details",
                        name: "details",
                        params: {
                            "detailModel": taid
                        }
                    })
                    console.log(taid)
                    // alert(taid)
                }
            },
        mounted: function () {
            this.$http.get("http://localhost:8081/user/nav?which=首页")
                .then(data => {
                    this.indexMode = data['data']['data']['records'];
                    console.log(this.indexMode)
                }).catch(function (err) {
                console.log(err)
            })
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