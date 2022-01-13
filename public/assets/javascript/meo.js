document.getElementById('navigaton').innerHTML = (`
<nav class="navbar">
        <div class="navbar-brand">
            <a class="navbar-item logo" href="#">
                <img src="/assets/images/logo.png">
            </a>
    
            <a class="navbar-burger" onclick="navshow()">
                <span class='bx-flashing'></span>
                <span class='bx-flashing'></span>
                <span class='bx-flashing'></span>
            </a>
        </div>
    
        <div id="nav" class="navbar-menu">
            <div class="navbar-start">
                <a class="navbar-item" href="/"><i class='bx bxs-home has-text-success'></i> الموقع الرئيسي</a>
                <a class="navbar-item" href="/learning-platform/"><i class='fas fa-portrait bx-tada has-text-info'></i> السيرة الذاتيه</a>
                <a class="navbar-item" href="/learning-platform/courses/"><i class='fas fa-th bx-tada has-text-danger'></i> الدورات</a>
                <a class="navbar-item" href="/learning-platform/contact/"><i class='fas fa-phone-alt has-text-black'></i> اتصل بنا</a>
            </div>
    
            <div class="navbar-end">
                <div class="buttons">
                    <a class="button is-primary is-outlined" href="https://www.patreon.com/GloriousReligion"><i class='bx bxs-dollar-circle bx-tada has-text-success'></i> لدعم الموقع</a>
                </div>
            </div>
        </div>
    </nav>

`)

document.getElementById('footer').innerHTML = (`
<footer class="footer">
    <div class="container has-text-centered">
        <div class="columns">
            <div class="column">
                <p class="subtitle is-5">تابعنا على:</p>
                <div>
                    <a href="https://bit.ly/youtube-Glorious-Religion"><i class='bx bxl-youtube has-text-danger'></i></a>
                    <a href="https://bit.ly/Telegram-Glorious-Religion"><i class='bx bxl-telegram has-text-info'></i></a>
                    <a href="https://www.patreon.com/GloriousReligion"><i class='bx bxl-patreon' style='color:#ff0000'></i></a>
                </div>
            </div>
            <div class="column">
                <p class="subtitle is-5">للتواصل:</p>
                <div>
                    <a href="mailto:GloriousReligion@site.com">GloriousReligion@site.com</a>
                </div>
            </div>
            <div class="column">
                <p class="subtitle is-5">الترجمة الحرفية | literal translation</p>
                <div>
                    <div id="google_translate_element" lang="en"></div>
                </div>
            </div>
        </div>
    </div>
</footer>

<div class="licens is-success">
    <div class="content has-text-centered has-text-white">
        <p>لا تنسونا من صالح دعائكم</p>
    </div>
</div>
`)