window.addEventListener('load', () => {
    // オープニングアニメーション終了でローダーを破棄
    gsap.to('#loader', {
        opacity: 0, 
        duration: 0.8, 
        onComplete: () => $('#loader').remove()
    });

    gsap.registerPlugin(ScrollTrigger);

    // ヒーローセクション登場
    gsap.from('.hero-content > *', {
        opacity: 0,
        y: 60,
        stagger: 0.15,
        duration: 1.2,
        ease: "power3.out"
    });

    // スクリューリガーを使ったセクションフェード表示
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

    // 各実績カードをクリックした際のポップアップ処理
    $('.work').on('click', function() {
        var workId = $(this).data('work');
        var title = $(this).find('h3').text();
        var contentHtml = "";

        if(workId === 'miki' || workId === 'leafa') {
            contentHtml = `
                <p style="color:var(--text-sub); margin-bottom:20px;">作品の詳細情報やデモ映像などをここに掲載できます。</p>
                <div style="background:#000; aspect-ratio:16/9; display:flex; justify-content:center; align-items:center; border:2px solid var(--neon-cyan);">
                    <span style="color:var(--neon-cyan); font-weight:bold;">[ 3DCG / UE プロジェクトプレビュー ]</span>
                </div>`;
        } else if(workId === 'fab') {
            contentHtml = `
                <p style="color:var(--text-sub); margin-bottom:20px;">販売中のBlueprintアセットやプラグイン等の詳細仕様をここに記載できます。</p>
                <div style="background:#000; aspect-ratio:16/9; display:flex; justify-content:center; align-items:center; border:2px solid var(--neon-cyan);">
                    <span style="color:var(--neon-cyan); font-weight:bold;">[ Fab Marketplace 開発データ ]</span>
                </div>`;
        } else {
            contentHtml = `
                <p style="color:var(--text-sub); margin-bottom:20px;">Web制作プロジェクトのモックアップやデザインパーツのコード構造をここに掲載できます。</p>
                <div style="background:#000; aspect-ratio:16/9; display:flex; justify-content:center; align-items:center; border:2px solid var(--neon-gold);">
                    <span style="color:var(--neon-gold); font-weight:bold;">[ Web UI/UX 設計カンプ ]</span>
                </div>`;
        }

        $('#arena-popup-content').html(`
            <h2 style="font-style:italic; color:#fff; margin-bottom:20px; text-transform:uppercase; border-bottom:1px solid rgba(255,255,255,0.1); padding-bottom:10px;">// ${title}</h2>
            ${contentHtml}
        `);
        $('#arena-popup').css('display', 'flex').hide().fadeIn(300);
    });

    // モーダル枠外 or 閉じるボタンクリックでポップアップを非表示化
    $('#close-popup, #arena-popup').on('click', function(e) {
        if (e.target !== this && e.target.id !== 'close-popup') return;
        $('#arena-popup').fadeOut(300);
    });
});