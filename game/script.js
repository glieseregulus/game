window.addEventListener('load', () => {
    gsap.to('#loader', {
        opacity: 0, 
        duration: 0.8, 
        onComplete: () => $('#loader').remove()
    });

    gsap.registerPlugin(ScrollTrigger);

    gsap.from('.hero-content > *', {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out"
    });

    gsap.utils.toArray('.section').forEach(sec => {
        const reveals = sec.querySelectorAll('.reveal');
        if (reveals.length > 0) {
            gsap.to(reveals, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.18, 
                ease: "cubic-bezier(0.25, 1, 0.5, 1)",
                scrollTrigger: {
                    trigger: sec,
                    start: 'top 82%', 
                    toggleActions: 'play none none none'
                }
            });
        }
    });

    $('.work').on('click', function() {
        var workId = $(this).data('work');
        var title = $(this).find('h3').text();
        var contentHtml = "";

        if(workId === 'miki') {
            contentHtml = `
                <p style="color:var(--text-sub); margin-bottom:20px;">MetaHuman キャラクター Miki のデモ映像です。</p>
                <div style="background:#000; width:100%; aspect-ratio:16/9; border:2px solid var(--neon-cyan); position:relative;">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/4YR2OxC8-es" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>
                </div>`;
        } else if(workId === 'leafa') {
            contentHtml = `
                <p style="color:var(--text-sub); margin-bottom:20px;">SAO Leafa 非公式同人プロジェクトのデモ映像です。</p>
                <div style="background:#000; width:100%; aspect-ratio:16/9; border:2px solid var(--neon-cyan); position:relative;">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/YH5QR0fkWZU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="position:absolute; top:0; left:0; width:100%; height:100%;"></iframe>
                </div>`;
        } else if(workId === 'fab') {
            contentHtml = `
                <p style="color:var(--text-sub); margin-bottom:20px;">販売中のBlueprintアセットやプラグイン等の詳細仕様をここに記載できます。</p>
                <div style="background:#000; aspect-ratio:16/9; display:flex; justify-content:center; align-items:center; border:2px solid var(--neon-cyan);">
                    <span style="color:var(--neon-cyan); font-weight:bold;">[ Fab Marketplace 開発データダミー ]</span>
                </div>`;
        } else {
            contentHtml = `
                <p style="color:var(--text-sub); margin-bottom:20px;">Web制作プロジェクトのモックアップやデザインパーツのコード構造をここに掲載できます。</p>
                <div style="background:#000; aspect-ratio:16/9; display:flex; justify-content:center; align-items:center; border:2px solid var(--neon-gold);">
                    <span style="color:var(--neon-gold); font-weight:bold;">[ Web UI/UX 設計カンプダミー ]</span>
                </div>`;
        }

        $('#arena-popup-content').html(`
            <h2 style="font-style:italic; color:#fff; margin-bottom:20px; text-transform:uppercase; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px;">// ${title}</h2>
            ${contentHtml}
        `);
        $('#arena-popup').css('display', 'flex').hide().fadeIn(300);
    });

    $('#close-popup, #arena-popup').on('click', function(e) {
        if (e.target !== this && e.target.id !== 'close-popup') return;
        $('#arena-popup').fadeOut(300);
    });
});
