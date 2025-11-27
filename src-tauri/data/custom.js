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
	    .Frame_content_3XrxZ{
            max-width:100vw!important;
        }
        .Frame_side_3G0Bf{
            width:220px!important;
        }
        .Frame_side_3G0Bf .Nav_inner_1QCVO{
            padding:10px 4px 40px!important;
        }
        .Main_full_1dfQX{
            width:47vw!important;
        }
        article footer{
            position:relative!important;
        }
        .ProfileHeader_pic_2Coeq{
            height:230px!important;
            overflow:hidden!important;
        }
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
		.BackTop_main_3m3aB, .m-gotop{
            margin-left:0!important;
            left:auto!important;
            right:10vw!important;
            bottom:10vh!important;
            width:60px!important;
            height:60px!important;
            background-color:#a472cb!important;
            border:none!important;
        }
        .woo-font--backTop{
            font-size:1.5rem!important;
            color:#fff!important;
        }
        .m-gotop a{
            height:100%!important;
            width:100%!important;
        }
		.Nav_logo_1BwBq{
            width:110px!important;
        }
        .Nav_logo_1BwBq img{
            display:none!important;
        }
        @media (min-width:1320px){
            .Nav_logoWrap_2fPbO{
                margin-left:-123px!important;
            }
        }
        @media (max-width:789px){
            .Nav_logoWrap_2fPbO {
                width:46px!important;
            }
        }
		.woo-tab-item-border{
            height:0.2rem!important;
        }
		.picture_inlineNum3_3P7k1{
            width:100%!important;
        }
        .picture_item_3zpCn{
            width:8vw!important;
            margin-right:5px!important;
            margin-bottom:5px!important;
        }
        .Viewer_content_3TYae{
            z-index:1!important;
        }
		.card-video_placeholder_3_xUz{
            max-height:35vh!important;
        }
        .card-video_plusInfo_IqCJC, .card-video_dur_9_eh0{
            bottom:15px!important;
        }
        .Index_backButton_3Yh5-[title="关闭弹层"] i{
            display:none!important;
        }
        .Index_backButton_3Yh5-[title="关闭弹层"]{
            z-index:1!important;
            top:0!important;
            left:0!important;
            height:100%!important;
            width:100%!important;
            background:none!important;
            border:none!important;
            cursor:default!important;
        }
        .Viewer_container_EZ7Dt{
            height:80%!important;
            width:80%!important;
            margin:5% auto 0!important;
        }
        .Frame_right_2tQRB{
            z-index:2!important;
        }
		:root{
            --w-color-orange-3:#aaa!important;
            --weibo-top-nav-logo-color:#fff!important;
            --w-hover:rgba(200,200,200,0.23)!important;

            --w-color-orange-1:#a472cb!important;
            --weibo-top-nav-pub-icon-bg:#a472cb!important;
            --weibo-top-nav-icon-bg-hover:#a472cb!important;

            --w-brand:#c74ab7!important;
            --weibo-top-nav-icon-badge-color:#c74ab7!important;
            --w-badge-background:#c74ab7!important;
        }
        .NavItem_main_2hs9r .woo-badge-outlying{
            color:#c74ab7!important;
            background:rgba(200,200,200,0.23)!important;
        }
        .detail_text_1U10O a, .head_cut_2Zcft:hover, .WB_frame_c a{
            color:#c076df!important;
        }
        .woo-button-flat.woo-button-primary, .IconBox_wrap_W3Oz_.IconBox_pub_1zIJ8{
            background:#a472cb!important;
        }
        .W_btn_a{
            background-color:#a472cb!important;
            border:none!important;
        }
        .UG_tips, .ProfileHeader_tag_2Ku6K{
            color:#c74ab7!important;
        }
        .LoginTopNav_logoS_wOXns path{
            fill:#c74ab7!important;
        }
        .W_btn_a:hover, .Nav_pub_QrDht:hover, .BackTop_main_3m3aB:hover, .woo-button-flat.woo-button-primary:hover, .IconBox_wrap_W3Oz_.IconBox_pub_1zIJ8:hover{
            background:#c74ab7!important;
        }
        .Edit_lsort2_2EtTh{
            border-color:rgba(164,114,203,.6)!important;
        }
        .Edit_lsort2in_2krtb:hover, .woo-button-line:hover, .ProfileHeader_tag_2Ku6K{
            background:rgba(200,200,200,0.23)!important;
        }
        .Edit_lsort2in_2krtb i:hover, .SearchBtn_sipt_3NOip{
            background-color:#fff!important;
        }
        .Nav_wrap_gHB1a .woo-tab-item-main.woo-tab-active, .Nav_wrap_gHB1a .woo-tab-item-main{
            color:#fff!important;
        }
        .Nav_panel_YI3-j{
            background-color:#141414!important;
        }
		:root{
            --feed-detail-og-font-size:.95rem!important;
            --feed-detail-re-font-size:.9rem!important;
        }
        .NavItem_text_3Z0D7, .wbpro-tab2 .text{
            font-size:.96rem!important;
        }
        .head_cut_2Zcft{
            font-family:fantasy,"方正姚体"!important;
            font-size:1.2rem!important;
            line-height:1.3rem!important;
        }
        .head-info_info_2AspQ{
            line-height:1rem!important;
        }
        .wbpro-feed-ogText{
            font-weight:bold!important;
            padding-top:8px!important;
        }
        .wbpro-feed-ogText .detail_wbtext_4CRf9 img{
            width:25px!important;
            height:25px!important;
            margin:0 3px!important;
            vertical-align:-2px!important;
        }
        .UG_left_nav .nav_item{
            font-size:16px!important;
        }
    `;
    // 3. 插入到页面头部（确保样式优先生效）
    document.head.appendChild(customStyle);
    // 可选：调试用（打包后可删除，或通过 PakePlus 调试模式查看）
    console.log('PakePlus 自定义 CSS 已注入');
});
