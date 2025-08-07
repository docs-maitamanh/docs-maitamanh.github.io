document.addEventListener('DOMContentLoaded', function() {
    // Create bank info widget
    const bankWidget = document.createElement('div');
    bankWidget.innerHTML = `
        <div class="bank-info-header">💳 Thông tin TK MAI TÂM ANH</div>
        <div class="bank-info-item">
            <div class="bank-name">Ngân hàng TMCP Quân Đội (MBBANK) - Chi nhánh Bắc Sài Gòn</div>
            <div class="bank-account">
            STK: <span class="account-number">3869099999</span>
            <button class="copy-btn" onclick="copyText('3869099999', this)">Copy</button>
            </div>
            <div class="account-holder">CÔNG TY TNHH ĐẦU TƯ MAI TÂM ANH</div>
        </div>
    `;
    bankWidget.className = 'bank-info-widget';
    document.body.appendChild(bankWidget);
});

function copyText(text, btn) {
    navigator.clipboard.writeText(text).then(function() {
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        setTimeout(() => {
            btn.textContent = originalText;
        }, 1500);
    });
}
