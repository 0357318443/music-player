const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const items = $$('.artist__item')
const names = $$('.artist__profile-header')
const icons = $('#artistIcon');
const artists = $('.artist');
const bgImg = $('.playlist__background-img')
const title = $('.playlist__header-title')
const ulList = $('.playlist__body-ul')
const imgSong = $('.footer__img')
const nameSong = $('.footer__title')
const nameSinger = $('.footer__text')
const audio = $('#audio')
const plays = $('.footer__play')
const progress = $('#progress')
const next = $('.footer__forward')
const prev = $('.footer__backward')
const repeat = $('.footer__repeat')
const shuffle = $('.footer__shuffle')
const playHeader = $('.playlist__header-icon')
const volume = $('.footer__run-volume')

/**
 * 1.Render songs
 * 2.Scroll Top
 * 3.Play/pause/seek
 * 4.CD rotate
 * 5.Next/ prev
 * 6.Random
 * 7.Next/ Repeat when ended
 * 8.Active Song
 * 9.Scroll active song into views
 * 10.Play song when click
 */

const artistsList = {
    sonTung: {
        title: 'Sơn Tùng M-TP',
        background: './assets/img/SƠN-TÙNG/ảnh-sơn-tùng ngang.jpg',
        songs: [
            {
                stt: 1,
                img: './assets/img/SƠN-TÙNG/đừng làm trái tim anh đau.jpg',
                name: 'Đừng làm trái tym anh đau',
                artist: 'Sơn Tùng M-TP',
                path: './assets/music/Song_Sơn_Tùng/SƠN TÙNG M-TP  ĐỪNG LÀM TRÁI TIM ANH ĐAU  OFFICIAL MUSIC VIDEO.mp3'
            },
            {
                stt: 2,
                img: './assets/img/SƠN-TÙNG/list-mtp.webp',
                name: 'Nắng ấm xa dần',
                artist: 'Sơn Tùng M-TP',
                path: './assets/music/Song_Sơn_Tùng/Nắng Ấm Xa Dần - Sơn Tùng M-TP.mp3'
            },
            {
                stt: 3,
                img: './assets/img/SƠN-TÙNG/list-mtp.webp',
                name: 'Âm thầm bên em',
                artist: 'Sơn Tùng M-TP',
                path: './assets/music/Song_Sơn_Tùng/Âm Thầm Bên Em (Lyrics Video).mp3'
            },
            {
                stt: 4,
                img: './assets/img/SƠN-TÙNG/list-mtp.webp',
                name: 'Buông đôi tay nhau ra',
                artist: 'Sơn Tùng M-TP',
                path: './assets/music/Song_Sơn_Tùng/Buông Đôi Tay Nhau Ra  OFFICIAL MUSIC VIDEO  Sơn Tùng M-TP.mp3'
            },
            {
                stt: 5,
                img: './assets/img/SƠN-TÙNG/chúng ta của hiện tại.jpg',
                name: 'Chúng ta của hiện tại',
                artist: 'Sơn Tùng M-TP',
                path: './assets/music/Song_Sơn_Tùng/SƠN TÙNG M-TP  CHÚNG TA CỦA HIỆN TẠI  OFFICIAL MUSIC VIDEO.mp3'
            }
        ]
    },

    jack: {
        title: 'Jack - J97',
        background:'./assets/img/Jack/ảnh-jack ngang.jpg',
        songs: [
            {
                stt: 1,
                img: './assets/img/Jack/domđốm.jpg',
                name: 'Đom Đóm',
                artist: 'Jack - J97',
                path: './assets/music/jack/ĐomĐóm.mp3'
            },
            {
                stt: 2,
                img: './assets/img/Jack/sóng gió.webp',
                name: 'Sóng Gió',
                artist: 'Jack - J97',
                path: './assets/music/jack/SóngGió.mp3'
            },
            {
                stt: 3,
                img: './assets/img/Jack/domđốm.jpg',
                name: 'Trạm Dừng Chân',
                artist: 'Jack - J97',
                path: './assets/music/jack/Trạmdừngchân.mp3'
            },
            {
                stt: 4,
                img: './assets/img/Jack/bạc phận.jpg',
                name: 'Bạc Phận',
                artist: 'Jack - J97',
                path: './assets/music/jack/Bạcphận.mp3'
            },
            {
                stt: 5,
                img: './assets/img/Jack/việt nam tôi.jpg',
                name: 'Việt Nam Tôi',
                artist: 'Jack - J97',
                path: './assets/music/jack/ViệtNamtôi.mp3'
            },
        ]
    },

    denVau: {
        title: 'Đen Vâu',
        background:'./assets/img/Đen-Vâu/đen-vâu-ngang.jpg',
        songs: [
            {
                stt: 1,
                img: './assets/img/Đen-Vâu/chill phết.webp',
                name: 'Bài này chill phết',
                artist: 'Đen Vâu',
                path: './assets/music/đen/BaiNayChillPhet.mp3'
            },
            {
                stt: 2,
                img: './assets/img/Đen-Vâu/chotoilangthang.jpg',
                name: 'Cho Tôi Lang Thang',
                artist: 'Đen Vâu',
                path: './assets/music/đen/ChoToiLangThang.mp3'
            },
            {
                stt: 3,
                img: './assets/img/Đen-Vâu/đi về nhà.jpg',
                name: 'Đi Về Nhà',
                artist: 'Đen Vâu',
                path: './assets/music/đen/ĐiVeNha.mp3'
            },
            {
                stt: 4,
                img: './assets/img/Đen-Vâu/đưa nhau đi trốn.png',
                name: 'Đưa Nhau Đi Trốn',
                artist: 'Đen Vâu',
                path: './assets/music/đen/ĐuaNhauĐiChon.mp3'
            },
            {
                stt: 5,
                img: './assets/img/Đen-Vâu/lối nhỏ.jpg',
                name: 'Lối Nhỏ',
                artist: 'Đen Vâu',
                path: './assets/music/đen/LoiNho.mp3'
            },
        ] 
    },

    
    hoaMinzy: {
        title: 'Hòa MinZy',
        background:'./assets/img/HòaMinzy/hòa-minzy-ngang.jpg',
        songs: [
            {
                stt: 1,
                img: './assets/img/HòaMinzy/bắc bling.jpg',
                name: 'Bắc Bling',
                artist: 'Hòa Minzy',
                path: './assets/music/hoaMinzy/BacBling.mp3'
            },
            {
                stt: 2,
                img: './assets/img/HòaMinzy/bật lên tình yêu.jpg',
                name: 'Bật lên tình yêu',
                artist: 'Hòa Minzy',
                path: './assets/music/hoaMinzy/BatTinhYeuLen.mp3'
            },
            {
                stt: 3,
                img: './assets/img/HòaMinzy/kén cá chọn canh.webp',
                name: 'Kén Cá Chọn Canh',
                artist: 'Hòa Minzy',
                path: './assets/music/hoaMinzy/KenCaChonCanh.mp3'
            },
            {
                stt: 4,
                img: './assets/img/HòaMinzy/không thể cùng nhau suốt kiếp.jpg',
                name: 'Không Thể Cùng Nhau Suốt Kiếp',
                artist: 'Hòa Minzy',
                path: './assets/music/hoaMinzy/KhongTheCungNhauSuotKiep.mp3'
            },
            {
                stt: 5,
                img: './assets/img/HòaMinzy/rời bỏ.webp',
                name: 'Rời Bỏ',
                artist: 'Hòa Minzy',
                path: './assets/music/hoaMinzy/RoiBo.mp3'
            },
        ] 
    },

    MCK: {
        title: 'MCK.',
        background:'./assets/img/MCK/mck-ngang.jpg',
        songs: [
            {
                stt: 1,
                img: './assets/img/MCK/mck-ổn-hơn.jpg',
                name: 'Anh Đã Ổn Hơn',
                artist: 'MCK',
                path: './assets/music/mck/AnhĐaOnHon.mp3'
            },
            {
                stt: 2,
                img: './assets/img/MCK/mộng yu.webp',
                name: 'Mộng Yu',
                artist: 'MCK',
                path: './assets/music/mck/MongYu.mp3'
            },
            {
                stt: 3,
                img: './assets/img/MCK/chìm sâu.jpg',
                name: 'Chìm Sâu',
                artist: 'MCK',
                path: './assets/music/mck/ChimSau.mp3'
            },
            {
                stt: 4,
                img: './assets/img/MCK/buồn hay vui.webp',
                name: 'Buồn Hay Vui',
                artist: 'MCK',
                path: './assets/music/mck/BuonHayVui.mp3'
            },
            {
                stt: 5,
                img: './assets/img/MCK/đánh đổi.webp',
                name: 'Đánh Đổi',
                artist: 'MCK',
                path: './assets/music/mck/ĐanhĐoi.mp3'
            },
        ] 
    },
};

const app = {
    currentArtist: 'sonTung',
    currentIndex: 0,
    isPlaying : false,
    isRepeat : false,
    isRandom : false,

    render: function() {
        //Lấy ra thuốc tính sonTung và lưu vào biến singer
        const singer = artistsList[this.currentArtist]

        bgImg.src = singer.background
        title.innerText = singer.title

        const html = singer.songs.map((song, index) => {
            const isActive = index === this.currentIndex;
            return `
                <li class="playlist__body-item ${isActive ? 'active' : ''}" data-index = ${index}>
                    <div class="playlist__body-music">
                        <span class="playlist__body-span">
                            ${isActive ? '<i class="fa-solid fa-chart-simple"></i>' : song.stt}
                        </span>
                        <img src="${song.img}" alt="" class="playlist__body-img">
                        <p class="playlist__body-name">${song.name}</p>
                    </div>
                    <div>
                        <span class="playlist__body-data">51.569.352</span>
                    </div>
                    <div class = "option">
                        <i class="playlist__body-icon fa-solid fa-ellipsis"></i>
                    </div>
                </li>
            `
        })
        ulList.innerHTML = html.join('');
        },

    handleEnvent: function(){
        const _this = this;

        //Thu Nhỏ thanh NavBar
        icons.onclick = function () {
            icons.classList.toggle('fa-chevron-left');
            icons.classList.toggle('fa-chevron-right');
            
            artists.classList.toggle('togger');

            // Kiểm tra xem class có phải là thu gọn hay không
            let isCollapsed = artists.classList.contains('togger');
            let classIcon = document.querySelector('.artist__icon');
            let classInput = document.querySelector('.artist__search');
            let profiles = document.querySelectorAll('.artist__profile');
            let lists = document.querySelector('.artist__list')

            //if ở đây chỉ khi DOM tìm thấy phần tử này, thì mới thao tác với nó.
            if (lists) lists.style.height = isCollapsed ? '90%' : '70%'
            if (classIcon) classIcon.style.display = isCollapsed ? 'none' : 'block';
            if (classInput) classInput.style.display = isCollapsed ? 'none' : 'block';

            profiles.forEach(p => {
                p.style.display = isCollapsed ? 'none' : 'block';
            });
        }

        //Khi click vào tên Nghệ sĩ thì hiện ra thông tin và listSong của singer đó
        items.forEach((item, index)=>{
            let name = names[index];
            item.onclick = function(){
                const id = item.dataset.id
                if (id && artistsList[id]) { // kiểm tra xem id có tồn tại không (khác undefined, null, "")
                //artistsList[id] có tồn tại không (nghĩa là trong object artistsList phải có key "jack" hoặc "sonTung",...)
                    _this.currentArtist = id;
                    _this.currentIndex = 0;
                    _this.render();
                    _this.loadCurrentSong();
                    // audio.pause();
                    plays.classList.remove('fa-circle-pause')
                    plays.classList.add('fa-circle-play')
                    playHeader.classList.remove('fa-circle-pause')
                    playHeader.classList.add('fa-circle-play')
                    progress.value=0;
                    imgRotate.cancel(); // Hủy toàn bộ anmation cũ
                    _this.isPlaying = false; 
                }
                $('.artist__item.background').classList.remove('background');
                $('.artist__profile-header.color').classList.remove('color');

                this.classList.add('background')
                name.classList.add('color')
            }
        })

        //Khi playSong thì ảnh Song sẽ quay
        /**
            * animate: là một phương thức dùng để tạo hiệu ứng chuyển động cho phần tử HTML, một cách trực tiếp bằng 
                JS mà không cần phải Css 
            * Cú pháp: element.animate(keyframes, options);
                    element: phần tử HTML bạn muốn animate (ví dụ: div, img, button, ...)
                    keyframes: mảng các bước chuyển động (giống CSS)
                    options: thời gian và kiểu chạy (duration, iterations,...)
        */
        const imgRotate = imgSong.animate(
            [
                {transform: 'rotate(360deg)'},
            ],
            {
                duration: 10000, //Thời gian quay một vòng là 10s
                iterations : Infinity //Quay vô hạn
            }
        );
        imgRotate.pause()//Mặc định ảnh sẽ chưa quay


        //Khi Song được Play và Pause
        plays.onclick = function(){
            if(_this.isPlaying){
                audio.pause();
            }
            else{
                audio.play()
            }
        }
        //Lắng nghe sự kiện khi audio được play
        audio.onplay = function(){
            _this.isPlaying = true;
            plays.classList.remove('fa-circle-play')
            plays.classList.add('fa-circle-pause')
            playHeader.classList.add('fa-circle-pause')
            playHeader.classList.remove('fa-circle-play')
            imgRotate.play();
        }
        audio.onpause = function(){
            _this.isPlaying = false;
            plays.classList.add('fa-circle-play')
            plays.classList.remove('fa-circle-pause')
            playHeader.classList.remove('fa-circle-pause')
            playHeader.classList.add('fa-circle-play')
            imgRotate.pause();
        }

        //Khi tiến độ bài hát thay đổi thì thành ranger cũng chạy theo
        audio.ontimeupdate = function(){ //đây là sự kiện cập nhật giao diện theo thời gian thực.
            if(audio.duration){ //Nếu duration là một số hợp lệ → chạy
                const progressPercent = Math.floor(audio.currentTime / audio.duration * 100)
                progress.value = progressPercent

                // Cập nhật màu xanh cho phần đã chạy
                progress.style.background = `linear-gradient(to right, #1ed760 0%, #1ed760 ${progressPercent}%, #ccc ${progressPercent}%, #ccc 100%)`;
            }
        }

        //Khi hết bài này thì nẩy qua bài tiếp theo
        audio.onended = function(){ //audio.onended trong JavaScript sẽ chỉ được kích hoạt khi bài hát phát đến hết
            if (_this.isRepeat) {
                audio.currentTime = 0;
                audio.play();
            } else if (_this.isRandom) {
                _this.randomSong();
                audio.play();
            } else {
                _this.nextSong();
                audio.play();
            }
            _this.render();
            _this.scrollToActiveSong();
        }

        //Khi tăng giảm âm lượng thì màu input thay đổi
        volume.oninput = function(){
            const value = this.value; // giá trị hiện tại (từ 0 → 100)
            this.style.background = `linear-gradient(to right, #1ed760 0%, #1ed760 ${value}%, #ccc ${value}%, #ccc 100%)`;
        }
        
        //Khi tua bài hát
        progress.oninput = function(e){
            const seek =(e.target.value / 100) * audio.duration //Công thức tính thời gian hiện tại khi tua
            audio.currentTime = seek;
            audio.play();
        }

        //Khi click vào nút playheader
        playHeader.onclick = function(){
            if(_this.isPlaying){
                audio.pause();
                playHeader.classList.add('fa-circle-play')
                playHeader.classList.remove('fa-circle-pause')
            }
            else{
                playHeader.classList.remove('fa-circle-play');
                playHeader.classList.add('fa-circle-pause');
                _this.currentIndex;
                _this.loadCurrentSong;
                audio.play();
            }
        }

        //Khi next bài hát
        next.onclick = function(){
            if(_this.isRandom){
                _this.randomSong();
                audio.play();
            }
            else{
                _this.nextSong();
                imgRotate.cancel()
                audio.play()
            }
            _this.render();
            _this.scrollToActiveSong();
        }

        //Khi quay lại bài trước
        prev.onclick = function(){
            if(_this.isRandom){
                _this.randomSong();
                audio.play();
            }
            else{
                _this.prevSong();
                imgRotate.cancel();
                audio.play();
            }
            _this.render();
            _this.scrollToActiveSong();
        }

        //Khi bấm vào nút repeat thì phát lại bài hát
        repeat.onclick = function(){
            _this.isRepeat = !_this.isRepeat
            if(_this.isRepeat){
                repeat.style.color = '#1ed760'
            }
            else{
                repeat.style.color = '#b4b4b4'
            }
        }

        //Khi bấm random bài hát thì đổi màu icon
        shuffle.onclick = function(){
            _this.isRandom = !_this.isRandom;
            if(_this.isRandom){
                shuffle.style.color = '#1ed760'
            }
            else{
                shuffle.style.color = '#b4b4b4'
            }
        }

        //Lắng nghe hành vi click vào playList
        ulList.onclick = function(e){
            //Closest: 
            const songNode = e.target.closest('.playlist__body-item:not(.active)')
            const iconNode = e.target.closest('.option')
            if(songNode || iconNode){ //Nếu click vào 1 trong 2 vùng (bài hát hoặc nút tùy chọn) thì xử lý tiếp.
                //Xử lý khi bấm vào nút icon
                if(iconNode){
                    return; //Ngăn xử lý ngay lập tức nếu là icon
                }

                //Xử lý khi click vào song
                //Chỉ xử lý đổi bài nếu KHÔNG click icon
                if(songNode){
                    _this.currentIndex = Number(songNode.dataset.index)
                    _this.render();
                    _this.loadCurrentSong();
                    audio.play();
                }
            }
        }
    },

    scrollToActiveSong: function(){
        $('.playlist__body-item.active').scrollIntoView({
        //scrollIntoView: Dùng để tự động cuộn trang sao cho phần tử bạn chỉ định đến luôn nằm trong khung nhìn
            behavior: 'smooth', //Hiệu ứng cuộn mượt trơn tru
            block: 'nearest' //Căn vị trí sao  cho khi cuộn thì thanh scroll ở vị trí nào có thể là "Star, End, Center"
        })
    },

    nextSong: function(){
        this.currentIndex++
        if(this.currentIndex >= artistsList[this.currentArtist].songs.length){
            this.currentIndex = 0;
        }
        this.loadCurrentSong()
    },

    prevSong: function(){
        this.currentIndex--
        if(this.currentIndex < 0){
            this.currentIndex = artistsList[this.currentArtist].songs.length - 1
        }
        this.loadCurrentSong()
    },

    randomSong: function(){
        let newIndex;
        do{
            newIndex = Math.floor(Math.random() * artistsList[this.currentArtist].songs.length)
            //Random ra một số thập phân ngẫu nhiêu và nhân với độ dài của danh sách bài hát và làm tròn dưới để lấy ra được index của bài hát
        }while(newIndex === this.currentIndex) //Nếu random ra số trùng với vị trí Index hiện tại thì dừng vòng lặp
        
        this.currentIndex = newIndex
        this.loadCurrentSong();
    },

    defineProperties: function(){
        Object.defineProperty(this, 'currentSong',{
            //Tham số thứ 3: Một object chứa thông tin thuộc tính mô tả
            get: function(){ //get ở đây đang gán giá trị mà get trả về cho thuộc tính currentSong
                return artistsList[this.currentArtist].songs[this.currentIndex];
            }
        })
        console.log(this.currentSong);
    },

    loadCurrentSong: function(){
        imgSong.src = this.currentSong.img;
        nameSong.innerText = this.currentSong.name;
        nameSinger.innerText = this.currentSong.artist;
        audio.src = this.currentSong.path;
    },

    start : function(){
        
        //Hàm lắng nghe các sự kiện xảy ra ở trong Dom
        this.handleEnvent();
        
        //Hàm định nghĩa lại một thuộc tính trong Object
        this.defineProperties();

        //Tải bài hát hiện tại
        this.loadCurrentSong();

        //Hàm render lấy ra listSong ra màn hình
        this.render();
    }
}
app.start()








