document.addEventListener('DOMContentLoaded', function() {
    // Create bank info widget
    const bankWidget = document.createElement('div');
    bankWidget.innerHTML = `
        <button class="bank-info-toggle" onclick="toggleBankInfo()">
            💳 Thông tin TK
        </button>
        <div class="bank-info-content" id="bankInfoContent">
            <div class="bank-info-item">
                <div class="bank-name">Vietcombank</div>
                <div>STK: 1234567890 <button class="copy-btn" onclick="copyText('1234567890')">Copy</button></div>
                <div>Chủ TK: MAI TÂM ANH</div>
            </div>
            <div class="bank-info-item">
                <div class="bank-name">Techcombank</div>
                <div>STK: 0987654321 <button class="copy-btn" onclick="copyText('0987654321')">Copy</button></div>
                <div>Chủ TK: MAI TÂM ANH</div>
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