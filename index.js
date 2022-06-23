const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const player1 = $('.player1');
const player2 = $('.player2');
const player3 = $('.player3');
const player4 = $('.player4');
const player5 = $('.player5');
const progress1 = $('#progress1');
const progress2 = $('#progress2');
const progress3 = $('#progress3');
const progress4 = $('#progress4');
const progress5 = $('#progress5');
const playBtn1 = $('#song1 .btn-toggle-play');
const playBtn2 = $('#song2 .btn-toggle-play');
const playBtn3 = $('#song3 .btn-toggle-play');
const playBtn4 = $('#song4 .btn-toggle-play');
const playBtn5 = $('#song5 .btn-toggle-play');
const audio1 = $('#audio1');
const audio2 = $('#audio2');
const audio3 = $('#audio3');
const audio4 = $('#audio4');
const audio5 = $('#audio5');
const playlist = $('.playlist');

const app = {
    isPlaying: false,
    songs: [
        {
            id: 1,
            name: 'Anh đã bỏ thuốc chưa',
            singer: 'Dung Nhi',
            path: '/asset/music/Bỏ Thuốc.m4a',
            image: '/asset/img/25.jpg'
        },
        {
            id: 2,
            name: 'Thằng điên',
            singer: 'Dung Nhi',
            path: '/asset/music/Thằng Điên.m4a',
            image: '/asset/img/26.jpg'
        },
        {
            id: 3,
            name: 'Bài gì không biết nữa',
            singer: 'Dung Nhi',
            path: '/asset/music/Không biết.m4a',
            image: '/asset/img/27.jpg'
        }
    ],

    // render: function () {
    //     const htmls = this.songs.map((song, index) => {
    //         return `
    //             <div id="song${song.id}" class="card player${song.id}">
    //                 <div class="content">
    //                     <div class="imgBx">
    //                         <img src="${song.image}">
    //                     </div>
    //                     <div class="contentBx">
    //                         <h3>${song.singer}<br><span>${song.name}</span></h3>
    //                     </div>
    //                 </div>
    //                 <div class="btn-toggle-play">
    //                     <i class="fas fa-play-circle icon icon-play"></i>
    //                     <i class="fas fa-pause icon icon-pause"></i>
    //                 </div>
    //                 <input id="progress${song.id}" class="progress" type="range" value="0" step="1" min="0" max="100">
    //                 <audio id="audio${song.id}" src="${song.path}"></audio>
    //             </div>
    //         `;
    //     })
    //     playlist.innerHTML = htmls.join('');
    // },

    handleEvents: function () {
        //Xử lý khi click play
        playBtn1.onclick = function () {
            if (app.isPlaying) {
                audio1.pause();
            } else {
                audio1.play()
            }
        }

        // Khi bài hát được play
        audio1.onplay = function () {
            app.isPlaying = true;
            player1.classList.add('playing');
        }

        // Khi bài hát được pause
        audio1.onpause = function () {
            app.isPlaying = false;
            player1.classList.remove('playing');
        }

        // Khi thời gian bài hát thay đổi
        audio1.ontimeupdate = function () {
            if (audio1.duration) {
                const progressPercent = Math.floor(audio1.currentTime / audio1.duration * 100)
                progress1.value = progressPercent
            }
        }

        // Xử lý khi tua bài hát
        progress1.onchange = function (e) {
            const seekTime = e.target.value * audio1.duration / 100
            audio1.currentTime = seekTime
        }


        // =======================================


        //Xử lý khi click play
        playBtn2.onclick = function () {
            if (app.isPlaying) {
                audio2.pause();
            } else {
                audio2.play()
            }
        }

        // Khi bài hát được play
        audio2.onplay = function () {
            app.isPlaying = true;
            player2.classList.add('playing');
        }

        // Khi bài hát được pause
        audio2.onpause = function () {
            app.isPlaying = false;
            player2.classList.remove('playing');
        }

        // Khi thời gian bài hát thay đổi
        audio2.ontimeupdate = function () {
            if (audio2.duration) {
                const progressPercent = Math.floor(audio2.currentTime / audio2.duration * 100)
                progress2.value = progressPercent
            }
        }

        // Xử lý khi tua bài hát
        progress2.onchange = function (e) {
            const seekTime = e.target.value * audio2.duration / 100
            audio2.currentTime = seekTime
        }


        // =======================================


        //Xử lý khi click play
        playBtn3.onclick = function () {
            if (app.isPlaying) {
                audio3.pause();
            } else {
                audio3.play()
            }
        }

        // Khi bài hát được play
        audio3.onplay = function () {
            app.isPlaying = true;
            player3.classList.add('playing');
        }

        // Khi bài hát được pause
        audio3.onpause = function () {
            app.isPlaying = false;
            player3.classList.remove('playing');
        }

        // Khi thời gian bài hát thay đổi
        audio3.ontimeupdate = function () {
            if (audio3.duration) {
                const progressPercent = Math.floor(audio3.currentTime / audio3.duration * 100)
                progress3.value = progressPercent
            }
        }

        // Xử lý khi tua bài hát
        progress3.onchange = function (e) {
            const seekTime = e.target.value * audio3.duration / 100
            audio3.currentTime = seekTime
        }

        // =======================================


        //Xử lý khi click play
        playBtn4.onclick = function () {
            if (app.isPlaying) {
                audio4.pause();
            } else {
                audio4.play()
            }
        }

        // Khi bài hát được play
        audio4.onplay = function () {
            app.isPlaying = true;
            player4.classList.add('playing');
        }

        // Khi bài hát được pause
        audio4.onpause = function () {
            app.isPlaying = false;
            player4.classList.remove('playing');
        }

        // Khi thời gian bài hát thay đổi
        audio4.ontimeupdate = function () {
            if (audio4.duration) {
                const progressPercent = Math.floor(audio4.currentTime / audio4.duration * 100)
                progress4.value = progressPercent
            }
        }

        // Xử lý khi tua bài hát
        progress4.onchange = function (e) {
            const seekTime = e.target.value * audio4.duration / 100
            audio4.currentTime = seekTime
        }

        // =======================================


        //Xử lý khi click play
        playBtn5.onclick = function () {
            if (app.isPlaying) {
                audio5.pause();
            } else {
                audio5.play()
            }
        }

        // Khi bài hát được play
        audio5.onplay = function () {
            app.isPlaying = true;
            player5.classList.add('playing');
        }

        // Khi bài hát được pause
        audio5.onpause = function () {
            app.isPlaying = false;
            player5.classList.remove('playing');
        }

        // Khi thời gian bài hát thay đổi
        audio5.ontimeupdate = function () {
            if (audio5.duration) {
                const progressPercent = Math.floor(audio5.currentTime / audio5.duration * 100)
                progress5.value = progressPercent
            }
        }

        // Xử lý khi tua bài hát
        progress5.onchange = function (e) {
            const seekTime = e.target.value * audio5.duration / 100
            audio5.currentTime = seekTime
        }
    },

    start: function () {
        this.handleEvents();

        // this.render();
    }
}

app.start();