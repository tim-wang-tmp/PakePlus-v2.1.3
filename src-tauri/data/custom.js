window.addEventListener("DOMContentLoaded",()=>{const t=document.createElement("script");t.src="https://www.googletagmanager.com/gtag/js?id=G-W5GKHM0893",t.async=!0,document.head.appendChild(t);const n=document.createElement("script");n.textContent="window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-W5GKHM0893');",document.body.appendChild(n)});// very important, if you don't know what it is, don't touch it
// 非常重要，不懂代码不要动，这里可以解决80%的问题，也可以生产1000+的bug
const hookClick = (e) => {
    const origin = e.target.closest('a')
    const isBaseTargetBlank = document.querySelector(
        'head base[target="_blank"]'
    )
    console.log('origin', origin, isBaseTargetBlank)
    if (
        (origin && origin.href && origin.target === '_blank') ||
        (origin && origin.href && isBaseTargetBlank)
    ) {
        e.preventDefault()
        console.log('handle origin', origin)
        location.href = origin.href
    } else {
        console.log('not handle origin', origin)
    }
}

window.open = function (url, target, features) {
    console.log('open', url, target, features)
    location.href = url
}

document.addEventListener('click', hookClick, { capture: true })

// 等待网页 DOM 完全加载（PakePlus 基于 Chromium，支持此事件）
document.addEventListener('DOMContentLoaded', function() {
    // 1. 创建 style 标签
    const customStyle = document.createElement('style');
    // 2. 写入你的 CSS 规则（保留 !important 确保优先级）
    customStyle.textContent = `
        .Main_side_i7Vti, .Main_sideMain_263ZF, .Side_sideBox_2G3FX {
            width: auto !important;
        }
        .Main_side_i7Vti {
            display: none !important;
        }
        .TipsAd_wrap_3QB_0, .Home_emptyPic_30wte {
            display: none !important;
        }
        .Bar_main_R1N5v {
            display: none !important;
        }
        .Home_wrap_XXu6Z .SecBar_visable_16JHY > div {
            display: none !important;
        }
    `;
    // 3. 插入到页面头部（确保样式优先生效）
    document.head.appendChild(customStyle);
    // 可选：调试用（打包后可删除，或通过 PakePlus 调试模式查看）
    console.log('PakePlus 自定义 CSS 已注入');
});
