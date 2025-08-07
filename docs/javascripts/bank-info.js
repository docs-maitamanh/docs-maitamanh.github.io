document.addEventListener('DOMContentLoaded', function() {
    // Create bank info widget
    const bankWidget = document.createElement('div');
    bankWidget.innerHTML = `
        <button class="bank-info-toggle" onclick="toggleBankInfo()">
            💳 Thông tin TK MAI TÂM ANH
        </button>
        <div class="bank-info-content" id="bankInfoContent">
            <div class="bank-info-item">
                <div class="bank-name">Ngân hàng: Ngân hàng TMCP Quân Đội (MBBANK) Chi nhánh Bắc Sài Gòn</div>
                <div>STK: 3869099999 <button class="copy-btn" onclick="copyText('1234567890')">Copy</button></div>
                <div>TÊN TK: CÔNG TY TNHH ĐẦU TƯ MAI TÂM ANH</div>
            </div>
            <div class="bank-info-item">
                <div style="font-size: 12px; color: #FFE4B5;">
                    Nội dung: [Tên khách hàng] - Nạp tiền
                </div>
            </div>
        </div>
    `;
    bankWidget.className = 'bank-info-float';
    document.body.appendChild(bankWidget);
});

function toggleBankInfo() {
    const content = document.getElementById('bankInfoContent');
    content.classList.toggle('show');
}

function copyText(text) {
    navigator.clipboard.writeText(text).then(function() {
        // Show success message
        const btn = event.target;
        const originalText = btn.textContent;
        btn.textContent = 'Copied!';
        btn.style.background = '#4CAF50';
        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = 'rgba(255,255,255,0.2)';
        }, 2000);
    });
}