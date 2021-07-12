'use strict';
{
    // メニュー内のサムネイルコンポーネント
    class Thumbnail {
        constructor(image, number, color, link){
            this.image = document.createElement('img');
            this.number = document.createElement('p');
            this.color = document.createElement('p');
            this.image.src = image;
            this.number.textContent = number;
            this.color.textContent = color;
            
            this.link = document.createElement('a');
            this.link.href = link;
            this.link.appendChild(this.image);
            this.link.appendChild(this.number);
            this.link.appendChild(this.color);

            const section = document.createElement('section');
            section.appendChild(this.link);

            const menuphoto = document.getElementById("menuphoto");
            menuphoto.appendChild(section);
        }
    }

    const thumbnails = [
      new Thumbnail("img/1.png", "#01", "White", "#01"),
      new Thumbnail("img/2.png", "#02", "Milk tea", "#02"),
      new Thumbnail("img/3.png", "#03", "Sage", "#03"),
      new Thumbnail("img/4.png", "#04", "Heather gray", "#04"),
      new Thumbnail("img/5.png", "#05", "Gray", "#05"),
      new Thumbnail("img/6.png", "#06", "Marine blue", "#06"),
      new Thumbnail("img/7.png", "#07", "Navy", "#07"),
      new Thumbnail("img/8.png", "#08", "Orange", "#08"),
      new Thumbnail("img/9.png", "#09", "Khaki", "#09"),
      new Thumbnail("img/10.png", "#10", "Black", "#10"),
    ];

    // メニューボタンの開閉処理
    const btn = document.getElementById("menubtn");
    const wrapper = document.getElementById('wrapper');
    const mask = document.getElementById('mask');
    const menuphoto = document.getElementById('menuphoto');
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        btn.classList.toggle('open');
        btn.classList.toggle('close');
        wrapper.classList.toggle('active');
        mask.classList.toggle('active');
    });
    mask.addEventListener('click', () => {
        btn.classList.toggle("active");
        btn.classList.toggle('open');
        btn.classList.toggle('close');
        wrapper.classList.toggle("active");
        mask.classList.toggle("active");
    });
    menuphoto.addEventListener('click', () => {
        btn.classList.toggle("active");
        btn.classList.toggle("open");
        btn.classList.toggle("close");
        wrapper.classList.toggle("active");
        mask.classList.toggle("active");
    });


    // PRODUCT部分のコンポーネント
    class Product {
        constructor(image, item, price, link){
            this.image = document.createElement('img');
            this.image.src = image;
            this.item = document.createElement('p');
            this.item.textContent = item;
            this.price = document.createElement('p');
            this.price.textContent = price;
            this.view = document.createElement('a');
            this.view.textContent = 'view';
            this.view.href = link;
            this.link = document.createElement('p');

            this.link.appendChild(this.view);

            const section = document.createElement('section');
            section.appendChild(this.image);
            section.appendChild(this.item);
            section.appendChild(this.price);
            section.appendChild(this.link);

            document.getElementById("js-itemswrap").appendChild(section);
        }
    }

    const products = [
      new Product(
        "img/product_1.jpg",
        "ファインウール クルーネックプルオーバー",
        "¥24,840 (+tax)",
        "#",
      ),
      new Product(
        "img/product_2.jpg",
        "ファインウール クルーネックプルオーバー",
        "¥24,840 (+tax)",
        "#",
      ),
      new Product(
        "img/product_3.jpg",
        "ファインウール クルーネックプルオーバー",
        "¥24,840 (+tax)",
        "#",
      ),
    ];

    // STYLEのコンポーネント
    class Style {
        constructor(image, number, color, item, price, link, id){
            const leftSec = document.createElement('section');
            this.image = document.createElement('img');
            this.image.src = image;
            leftSec.appendChild(this.image);

            this.number = document.createElement('p');
            this.number.textContent = `color ${number}`;
            this.color = document.createElement('p');
            this.color.textContent = color;
            this.item = document.createElement('p');
            this.item.textContent = item;
            this.price = document.createElement('p');
            this.price.textContent = price;
            this.view = document.createElement('a');
            this.view.textContent = "view";
            this.view.href = link;

            const p = document.createElement('p');
            p.appendChild(this.view);

            const rightSec = document.createElement('section');
            rightSec.appendChild(this.number);
            rightSec.appendChild(this.color);
            rightSec.appendChild(this.item);
            rightSec.appendChild(this.price);
            rightSec.appendChild(p);

            const div = document.createElement('div');
            div.classList.add('panel');
            div.appendChild(leftSec);
            div.appendChild(rightSec);
            div.setAttribute('id', id);

            document.getElementById("js-stylewrap").appendChild(div);
        }
    }

    const styles = [
      new Style(
        "img/style_1.jpg",
        "#01",
        "White",
        "ファインウール クルーネックプルオーバー",
        "¥24,840 (+tax)",
        "#",
        "01"
      ),
      new Style(
        "img/style_2.jpg",
        "#02",
        "Milk tea",
        "ファインウール クルーネックプルオーバー",
        "¥24,840 (+tax)",
        "#",
        "02"
      ),
      new Style(
        "img/style_3.jpg",
        "#03",
        "Sage",
        "ファインウール クルーネックプルオーバー",
        "¥24,840 (+tax)",
        "#",
        "03"
      ),
      new Style(
        "img/style_4.jpg",
        "#04",
        "Heather gray",
        "ファインウール クルーネックプルオーバー",
        "¥24,840 (+tax)",
        "#",
        "04"
      ),
      new Style(
        "img/style_5.jpg",
        "#05",
        "Gray",
        "ファインウール クルーネックプルオーバー",
        "¥24,840 (+tax)",
        "#",
        "05"
      ),
      new Style(
        "img/style_6.jpg",
        "#06",
        "Marine blue",
        "ファインウール クルーネックプルオーバー",
        "¥24,840 (+tax)",
        "#",
        "06"
      ),
      new Style(
        "img/style_7.jpg",
        "#07",
        "Navy",
        "ファインウール クルーネックプルオーバー",
        "¥24,840 (+tax)",
        "#",
        "07"
      ),
      new Style(
        "img/style_8.jpg",
        "#08",
        "Orange",
        "ファインウール クルーネックプルオーバー",
        "¥24,840 (+tax)",
        "#",
        "08"
      ),
      new Style(
        "img/style_9.jpg",
        "#09",
        "Khaki",
        "ファインウール クルーネックプルオーバー",
        "¥24,840 (+tax)",
        "#",
        "09"
      ),
      new Style(
        "img/style_10.jpg",
        "#10",
        "Black",
        "ファインウール クルーネックプルオーバー",
        "¥24,840 (+tax)",
        "#",
        "10"
      ),
    ];

    // ページネーションの処理
    const white = document.getElementById('white');
    const milk = document.getElementById('milk');
    const sage = document.getElementById('sage');
    const hgray = document.getElementById('hgray');
    const gray = document.getElementById('gray');
    const blue = document.getElementById('blue');
    const navy = document.getElementById('navy');
    const orange = document.getElementById('orange');
    const khaki = document.getElementById('khaki');
    const black = document.getElementById('black');

    window.addEventListener('scroll', function(){
        let scroll = document.documentElement.scrollTop;

        if(scroll < 2400){
            white.classList.add('current');
        } else {
            white.classList.remove('current');
        };
        if(scroll >= 2400 && scroll < 3200){
            milk.classList.add('current');
        } else {
            milk.classList.remove('current');
        };
        if(scroll >= 3200 && scroll < 4000){
            sage.classList.add('current');
        } else {
            sage.classList.remove('current');
        };
        if(scroll >= 4000 && scroll < 4800){
            hgray.classList.add('current');
        } else {
            hgray.classList.remove('current');
        };
        if(scroll >= 4800 && scroll < 5560){
            gray.classList.add('current');
        } else {
            gray.classList.remove('current');
        };
        if(scroll >= 5560 && scroll < 6390){
            blue.classList.add('current');
        } else {
            blue.classList.remove('current');
        };
        if(scroll >= 6390 && scroll < 7170){
            navy.classList.add('current');
        } else {
            navy.classList.remove('current');
        };
        if(scroll >= 7170 && scroll < 7960){
            orange.classList.add('current');
        } else {
            orange.classList.remove('current');
        };
        if(scroll >= 7960 && scroll < 8760){
            khaki.classList.add('current');
        } else {
            khaki.classList.remove('current');
        };
        if(scroll >= 8760){
            black.classList.add('current');
        } else {
            black.classList.remove('current');
        };
        
    });
}