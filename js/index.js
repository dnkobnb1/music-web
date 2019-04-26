Vue.component('song-rank',{
    props:['song'],
    template:`<li> {{song.music_name}} <br/>{{song.songer.songer_name}} </li>`
})
Vue.component('sheet-recommend',{
    props:['sheet'],
    template: `<div class="music_list">
                    <img v-bind:src="sheet.list_img">
                    <a> {{sheet.list_name}} </a><br/>
                    <span>播放量:{{sheet.volume}} </span>
                </div>`
})
Vue.component('song-recommend',{
    props:['music'],
    template: `<div class="music_play">
                   <img v-bind:src="music.music_img">
                   <div class="detail_panel">
                       <h5>{{music.music_name}}</h5>
                       <p>{{music.songer.songer_name}}</p>
                   </div>
                   <div class="time_panel">
                       {{music.duration}}
                   </div>
               </div>`
})
Vue.component('album-recommend',{
    props:['album'],
    template: `<div class="music_list">
                    <img v-bind:src="album.album_img">
                    <a> {{album.album_name}} </a><br/>
                    <span>{{album.songer.songer_name}} </span>
                </div>`
})
var vm=new Vue({
    el:"#main",
    data:{
        musicList:null,
        albumList:null,
        sheetList:null,
        rank_popular:null,
        rank_hot:null,
        rank_new:null,
        rank_eu:null,
        rank_korea:null
    },
    mounted:function () {
        this.loadindex();
    },
    methods:{
        loadindex:function () {
            axios.get('/load/index').then(function (response) {
                vm.musicList=response.data.map.musicList;
                vm.albumList=response.data.map.albumList;
                vm.sheetList=response.data.map.musicsheetList;
                vm.rank_popular=response.data.map.rank_style;
                vm.rank_hot=response.data.map.rank_hot;
                vm.rank_eu=response.data.map.rank_eu;
                vm.rank_korea=response.data.map.rank_korea;
                vm.rank_new=response.data.map.rank_new;
            })
        }
    }
})
