// Template Data
const TICKET_TEMPLATE = `<!doctype html>
<html lang="th">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>e-Ticket | ถาปัดการละคอน</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Sarabun:wght@400;600&display=swap" rel="stylesheet">
    <style>
        /* Basic reset for email */
        body,
        table,
        td,
        a {
            -webkit-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
        }

        table,
        td {
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
        }

        img {
            -ms-interpolation-mode: bicubic;
            display: block;
            border: 0;
            outline: none;
            text-decoration: none;
        }

        body {
            margin: 0;
            padding: 0;
            width: 100% !important;
            background-color: #f4f6fb;
            font-family: "Sarabun", sans-serif;
            color: #0b3d91;
        }

        hr {
            border: none;
            /* Removes the default border */
            height: 1px;
            /* Sets the height of the line */
            background-color: #cecece;
            /* Sets the color of the line */
            width: 20%;
            /* Sets the width of the line */
            margin: 16px auto;
            /* Centers the line and adds vertical spacing */
        }

        .container {
            max-width: 600px;
            margin: 24px auto;
            background: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 6px 18px rgba(11, 61, 145, 0.08);
        }

        .header {
            background: #0b3d91;
            color: #ffffff;
            padding: 20px 24px;
            text-align: left;
        }

        .header h1 {
            margin: 0;
            font-size: 20px;
            letter-spacing: 0.2px;
        }

        .sub {
            color: #cfe1ff;
            font-size: 13px;
            margin-top: 6px;
        }

        .body {
            padding: 20px 24px;
            color: #0b3d91;
        }

        .event-title {
            font-size: 18px;
            font-weight: 600;
            margin: 0 0 8px 0;
        }

        .meta {
            font-size: 14px;
            margin: 6px 0;
        }

        .ticket-box {
            border: 1px dashed #dbe9ff;
            border-radius: 8px;
            padding: 14px;
            margin-top: 14px;
            background: #fbfeff;
            width: 100%;
        }

        .ticket-info {
            flex: 1;
        }

        .ticket-info p {
            margin: 6px 0;
            font-size: 14px;
        }

        .label {
            color: #657dab;
            font-size: 12px;
            margin-bottom: 4px;
            display: block;
        }

        .qr {
            width: 120px;
            height: 120px;
            background: #fff;
            border-radius: 6px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 1px solid #e6f0ff;
        }

        .btn {
            display: inline-block;
            background: #0b3d91;
            color: #fff;
            text-decoration: none;
            padding: 10px 16px;
            border-radius: 6px;
            font-weight: 600;
            margin-top: 12px;
        }

        .footer {
            background: #f8fbff;
            padding: 16px 24px;
            font-size: 13px;
            color: #6b7b99;
            border-top: 1px solid #eef6ff;
        }

        .small {
            font-size: 12px;
            color: #98a9c7;
        }

        @media (max-width:480px) {
            .ticket-box {
                flex-direction: column;
                align-items: flex-start;
            }

            .qr {
                width: 100%;
                max-width: 220px;
                height: auto;
                padding: 12px 0;
            }
        }

        .banner-img {
            width: 100%;
            height: auto;
            display: block;
        }

        .social-icon {
            vertical-align: middle;
        }
    </style>
</head>

<body>
    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
        <tr>
            <td align="center">
                <div class="container" role="document" aria-label="e-ticket ถาปัดการละคอน">
                    <!-- Header -->
                    <div class="header" style="text-align: center">
                        <h1>Your E-Ticket for ถาปัดการละคอนครั้งที่65 The Atlantis</h1>
                        <div class="sub">ยืนยันการซื้อบัตรรับชมการแสดง</div>
                    </div>
                    <div>
                        <img src="https://ik.imagekit.io/atlantis65/atlantis65.jpg?updatedAt=1764923398618" alt="lakorntapad65" class="banner-img">
                    </div>
                    

                    <!-- Body -->
                    <div class="body">
                        <p class="event-title">🎫 E-Ticket Confirmation 🎫</p>
                        <p class="meta">ขอบคุณสำหรับการสนับสนุนละคอนถาปัดในปีนี้
                            <br> โปรดแสดงอีเมลฉบับนี้ที่หน้างานเพื่อแลกรับบัตรแข็งเข้าชมการแสดง
                        </p>

                        <!-- Ticket card -->
                        <!-- Ticket card (Table for Email Compatibility) -->
                        <table class="ticket-box" width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td class="ticket-info" valign="top" align="center" style="text-align: center;">
                                    <p><span class="label" style="margin-bottom:24px;">{{PROMOTION}}</span>
                                    </p>
                                    <p><span class="label">ชื่อผู้เข้าชม</span><strong>{{NAME}}</strong></p>
                                    <p><span class="label">รอบ / วันที่ / เวลา</span><strong>{{ROUND}}
                                        </strong></p>
                                    <p><span class="label">ที่นั่ง</span><strong>{{ZONE_SEAT}}</strong></p>
                                </td>
                            </tr>
                        </table>

                        <!-- Download Link Section -->
                        <div style="text-align: center; margin-top: 20px; padding: 15px; background-color: #f0f7ff; border-radius: 8px; border: 1px solid #dbe9ff;">
                            <p style="margin: 0 0 10px 0; font-size: 14px; color: #0b3d91;"><strong> 🎟️ E-Ticket ของคุณ :</strong></p>
                            {{DOWNLOAD_SECTION}}
                        </div>

                        <!-- Additional instructions -->
                        <div style="margin-top:14px;">

                            <p class="small"><strong>ข้อแนะนำ:</strong></p>
                            <ul style="margin:8px 0 0 18px; color:#38558f; font-size:13px; padding:0;">
                                <li>กรุณามาถึงก่อนเวลาอย่างน้อย 20 นาที</li>
                                <li>โปรดแสดงอีเมลฉบับนี้และ QR-Code ในวันแสดง</li>
                                <li>ห้ามนำอาหารหรือเครื่องดื่มเข้าหอประชุม</li>
                            </ul>
                        </div>

                    </div>

                    <!-- Footer -->
                    <div class="footer">
                        <div>
                            <p>ร่วมดำดิ่งสู่ดินแดนใต้สมุทรไปพร้อมกัน
                                วันที่ 9-11 และ 16-18 มกราคม 2569
                                <br>ณ หอประชุมจุฬาลงกรณ์มหาวิทยาลัย
                            </p>
                        </div>
                        <hr>
                        <p style="margin-top:12px;"><strong>ติดต่อสอบถามข้อมูลเพิ่มเติมได้ที่:</strong></p>
                        <table width="100%" cellpadding="0" cellspacing="0" border="0">
                            <tr>
                                <td align="center">
                                    <table cellpadding="0" cellspacing="0" border="0" style="display: inline-table;">
                                        <tr>
                                            <td style="padding: 0 10px;">
                                                <a href="https://www.facebook.com/Tapadkarnlakorn" target="_blank"
                                                    style="text-decoration: none; color: #6b7b99; display: block;">
                                                    <table cellpadding="0" cellspacing="0" border="0">
                                                        <tr>
                                                            <td valign="middle"><img
                                                                    src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                                                                    width="20" height="20" alt="Facebook"
                                                                    style="display: block; border: 0;"></td>
                                                            <td valign="middle" style="padding-left: 6px;"><span
                                                                    style="font-size: 13px; color: #6b7b99;">Tapadkarnlakorn</span>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </a>
                                            </td>
                                            <td style="color: #eef6ff;">•</td>
                                            <td style="padding: 0 10px;">
                                                <a href="https://www.instagram.com/tapadkarnlakorn" target="_blank"
                                                    style="text-decoration: none; color: #6b7b99; display: block;">
                                                    <table cellpadding="0" cellspacing="0" border="0">
                                                        <tr>
                                                            <td valign="middle"><img
                                                                    src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
                                                                    width="20" height="20" alt="Instagram"
                                                                    style="display: block; border: 0;"></td>
                                                            <td valign="middle" style="padding-left: 6px;"><span
                                                                    style="font-size: 13px; color: #6b7b99;">@tapadkarnlakorn</span>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                        <p class="small" style="margin-top:10px;">โปรดเก็บอีเมลฉบับนี้ไว้เป็นหลักฐานการเข้าชม</p>
                    </div>
                </div>
            </td>
        </tr>
        <tr>
            <td align="center" style="padding:8px 0 30px 0;">
                <span class="small" style="color:#99a9cf;">© 2025 ถาปัดการละคอน · คณะสถาปัตยกรรมศาสตร์
                    จุฬาลงกรณ์มหาวิทยาลัย</span>
            </td>
        </tr>
    </table>
</body>

</html>`;

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('ticketForm');
    const outputSection = document.getElementById('outputSection');
    const outputCode = document.getElementById('outputCode');
    const copyBtn = document.getElementById('copyBtn');
    // const fileInput = document.getElementById('ticketFile'); // Removed
    // const fileCustomText = document.querySelector('.file-custom'); // Removed

    const previewBtn = document.getElementById('previewBtn');
    const openWindowBtn = document.getElementById('openWindowBtn');
    const previewContainer = document.getElementById('previewContainer');
    const previewFrame = document.getElementById('previewFrame');

    // Ticket Type Toggle Logic
    const ticketTypeRadios = document.querySelectorAll('input[name="ticketType"]');
    const linkSection = document.getElementById('linkSection');
    const imageSection = document.getElementById('imageSection');
    const qrImageInput = document.getElementById('qrImage');

    function updateTicketTypeVisibility() {
        const selectedType = document.querySelector('input[name="ticketType"]:checked').value;
        const linkInputs = document.querySelectorAll('input[name="driveLink"]');

        if (selectedType === 'link') {
            linkSection.style.display = 'block';
            imageSection.style.display = 'none';
            // Enable required for links
            linkInputs.forEach(input => input.setAttribute('required', ''));
        } else {
            linkSection.style.display = 'none';
            imageSection.style.display = 'block';
            // Disable required for links so form can submit
            linkInputs.forEach(input => input.removeAttribute('required'));
        }
        validateForm();
    }

    ticketTypeRadios.forEach(radio => {
        radio.addEventListener('change', updateTicketTypeVisibility);
    });

    qrImageInput.addEventListener('change', validateForm);

    // Update file input text - Removed

    const zoneSelect = document.getElementById('zoneSelect');
    const subZoneSelect = document.getElementById('subZoneSelect');

    const subZoneData = {
        'โซน A บัลลังก์ไข่มุก': ['A1', 'A2', 'A3'],
        'โซน B พระราชวัง': ['B1', 'B2', 'B3', 'B4'],
        'โซน C ท้องพระโรง': ['C1', 'C2'],
        'โซน D แนวปะการัง': ['D1', 'D2', 'D3', 'D4']
    };

    zoneSelect.addEventListener('change', () => {
        const selectedZone = zoneSelect.value;
        subZoneSelect.innerHTML = '<option value="" disabled selected>เลือกซับโซน</option>';

        if (selectedZone && subZoneData[selectedZone]) {
            subZoneSelect.disabled = false;
            subZoneData[selectedZone].forEach(sub => {
                const option = document.createElement('option');
                option.value = sub;
                option.textContent = sub;
                subZoneSelect.appendChild(option);
            });
        } else {
            subZoneSelect.disabled = true;
        }
    });

    const linkContainer = document.getElementById('linkContainer');
    const addLinkBtn = document.getElementById('addLinkBtn');

    function updateLinkNumbers() {
        const rows = linkContainer.querySelectorAll('.link-row');
        rows.forEach((row, index) => {
            const numberSpan = row.querySelector('.link-number');
            if (numberSpan) {
                numberSpan.textContent = `${index + 1}.`;
            }
        });
    }

    // Add new link input
    addLinkBtn.addEventListener('click', () => {
        const linkRow = document.createElement('div');
        linkRow.className = 'link-row';
        linkRow.style.marginBottom = '10px';
        linkRow.style.display = 'flex';
        linkRow.style.gap = '10px';

        const numberSpan = document.createElement('span');
        numberSpan.className = 'link-number';
        numberSpan.style.paddingTop = '14px';
        numberSpan.style.fontWeight = 'bold';
        numberSpan.style.color = '#0b3d91';
        numberSpan.textContent = '0.'; // Will be updated immediately

        const input = document.createElement('input');
        input.type = 'url';
        input.name = 'driveLink'; // use same name to collect later
        input.placeholder = 'https://drive.google.com/...';
        input.required = true;

        const removeBtn = document.createElement('button');
        removeBtn.type = 'button';
        removeBtn.textContent = 'ลบ';
        removeBtn.className = 'btn-secondary';
        removeBtn.style.padding = '10px';
        removeBtn.style.color = 'red';
        removeBtn.style.borderColor = 'red';

        removeBtn.addEventListener('click', () => {
            linkContainer.removeChild(linkRow);
            updateLinkNumbers();
        });

        linkRow.appendChild(numberSpan);
        linkRow.appendChild(input);
        linkRow.appendChild(removeBtn);
        linkContainer.appendChild(linkRow);

        updateLinkNumbers();
        validateForm(); // Validate after adding
    });

    // Validation Logic
    const submitBtn = form.querySelector('button[type="submit"]');

    function validateForm() {
        const name = document.getElementById('visitorName').value.trim();
        const round = document.getElementById('roundSelect').value;
        const zone = document.getElementById('zoneSelect').value;
        const subZoneSelect = document.getElementById('subZoneSelect');
        const seat = document.getElementById('seatNumber').value.trim();

        let subZoneValid = true;
        if (!subZoneSelect.disabled) {
            subZoneValid = subZoneSelect.value !== '';
        }

        // Check ticket validation based on type
        const selectedType = document.querySelector('input[name="ticketType"]:checked').value;
        let methodValid = false;

        if (selectedType === 'link') {
            const linkInputs = document.querySelectorAll('input[name="driveLink"]');
            linkInputs.forEach(input => {
                if (input.value.trim() !== '') {
                    methodValid = true;
                }
            });
        } else {
            // Image mode
            if (qrImageInput.files.length > 0) {
                methodValid = true;
            }
        }

        if (name && round && zone && subZoneValid && seat && methodValid) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    }

    // Attach listeners for validation
    document.getElementById('visitorName').addEventListener('input', validateForm);
    document.getElementById('roundSelect').addEventListener('change', validateForm);
    document.getElementById('zoneSelect').addEventListener('change', () => {
        // zone change triggers subzone change logic which is async in event loop
        // but synchronous in execution. Wait for subZone population?
        // Actually the subzone population runs on change, so we run validation after.
        setTimeout(validateForm, 0);
    });
    document.getElementById('subZoneSelect').addEventListener('change', validateForm);
    document.getElementById('seatNumber').addEventListener('input', validateForm);

    // Delegate input listener for dynamic links
    linkContainer.addEventListener('input', (e) => {
        if (e.target.name === 'driveLink') {
            validateForm();
        }
    });

    // Reset Button Logic
    const resetBtn = document.getElementById('resetBtn');
    resetBtn.addEventListener('click', () => {
        // Reset form fields
        form.reset();

        // Reset subzone dropdown
        subZoneSelect.disabled = true;
        subZoneSelect.innerHTML = '<option value="" disabled selected>เลือกซับโซน</option>';

        // Reset ticket type
        document.querySelector('input[name="ticketType"][value="link"]').checked = true;
        updateTicketTypeVisibility();
        qrImageInput.value = '';

        // Reset dynamic link inputs (keep only one)
        linkContainer.innerHTML = ''; // prevent accumulation
        // Re-create initial input
        const linkRow = document.createElement('div');
        linkRow.className = 'link-row';
        linkRow.style.marginBottom = '10px';
        linkRow.style.display = 'flex';
        linkRow.style.gap = '10px';

        const numberSpan = document.createElement('span');
        numberSpan.className = 'link-number';
        numberSpan.style.paddingTop = '14px';
        numberSpan.style.fontWeight = 'bold';
        numberSpan.style.color = '#0b3d91';
        numberSpan.textContent = '1.';

        const input = document.createElement('input');
        input.type = 'url';
        input.name = 'driveLink';
        input.placeholder = 'https://drive.google.com/...';
        input.required = true;

        linkRow.appendChild(numberSpan);
        linkRow.appendChild(input);
        linkContainer.appendChild(linkRow);

        // Hide output sections
        outputSection.style.display = 'none';
        previewContainer.style.display = 'none';
        outputCode.value = '';

        // Validate to update button state (should be disabled)
        validateForm();
    });

    // Initial check
    validateForm();

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get values
        const name = document.getElementById('visitorName').value;
        const promotion = document.getElementById('promotionText').value;
        const round = document.getElementById('roundSelect').value;
        const zone = document.getElementById('zoneSelect').value;
        const subZone = document.getElementById('subZoneSelect').value;
        const seat = document.getElementById('seatNumber').value;

        const selectedType = document.querySelector('input[name="ticketType"]:checked').value;
        let downloadSectionHtml = '';

        if (selectedType === 'link') {
            // Collect all links
            const linkInputs = document.querySelectorAll('input[name="driveLink"]');
            const links = [];
            linkInputs.forEach(input => {
                if (input.value.trim()) {
                    links.push(input.value.trim());
                }
            });

            if (links.length === 0) {
                alert('กรุณาระบุลิงก์ Google Drive อย่างน้อย 1 ลิงก์');
                return;
            }

            if (links.length === 1) {
                downloadSectionHtml = `<a href="${links[0]}" target="_blank" style="display: inline-block; background: #0b3d91; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: 600; font-size: 14px; line-height: 20px;"><img src="https://img.icons8.com/ios-filled/50/ffffff/download.png" alt="Download" width="16" height="16" style="vertical-align: middle; margin-right: 8px; border: 0; display: inline-block;"><span style="vertical-align: middle;">ดาวน์โหลด E-Ticket</span></a>`;
            } else {
                downloadSectionHtml = '<div style="display: flex; flex-direction: column; gap: 10px; align-items: center;">';
                links.forEach((link, index) => {
                    downloadSectionHtml += `<a href="${link}" target="_blank" style="display: inline-block; background: #0b3d91; color: #fff; text-decoration: none; padding: 10px 20px; border-radius: 6px; font-weight: 600; font-size: 14px; line-height: 20px; width: 220px;"><img src="https://img.icons8.com/ios-filled/50/ffffff/download.png" alt="Download" width="16" height="16" style="vertical-align: middle; margin-right: 8px; border: 0; display: inline-block;"><span style="vertical-align: middle;">ดาวน์โหลด E-Ticket ${index + 1}</span></a>`;
                });
                downloadSectionHtml += '</div>';
            }
            generateTicket(downloadSectionHtml);

        } else {
            // Image Mode
            const file = qrImageInput.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e) {
                    const dataUrl = e.target.result;
                    // Embed Image with optimized size
                    downloadSectionHtml = `<div style="text-align: center; padding: 20px 0;"><img src="${dataUrl}" alt="E-Ticket QR" style="width: 80%; max-width: 300px; height: auto; display: inline-block; border: 1px solid #e6f0ff; border-radius: 12px; box-shadow: 0 4px 12px rgba(11, 61, 145, 0.1);"></div>`;
                    generateTicket(downloadSectionHtml);
                };
                reader.readAsDataURL(file);
            }
        }

        function generateTicket(downloadHtml) {
            // Prepare replacements
            const zoneSeat = `${zone} (${subZone}) — ที่นั่ง ${seat}`;

            // Replace placeholders
            let finalHtml = TICKET_TEMPLATE
                .replace('{{PROMOTION}}', promotion)
                .replace('{{NAME}}', name)
                .replace('{{ROUND}}', round)
                .replace('{{ZONE_SEAT}}', zoneSeat)
                .replace('{{DOWNLOAD_SECTION}}', downloadHtml);

            // Output result
            outputCode.value = finalHtml;
            outputSection.style.display = 'block';

            // Auto-preview
            previewContainer.style.display = 'block';
            const doc = previewFrame.contentWindow.document;
            doc.open();
            doc.write(finalHtml);
            doc.close();

            // Scroll to output
            outputSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Preview Button
    previewBtn.addEventListener('click', () => {
        const html = outputCode.value;
        if (html) {
            previewContainer.style.display = 'block';
            const doc = previewFrame.contentWindow.document;
            doc.open();
            doc.write(html);
            doc.close();
        }
    });

    // Open in New Window Button
    openWindowBtn.addEventListener('click', () => {
        const html = outputCode.value;
        if (html) {
            const newWindow = window.open();
            if (newWindow) {
                newWindow.document.open();
                newWindow.document.write(html);
                newWindow.document.close();
            } else {
                alert('Please allow popups for this website');
            }
        }
    });

    // Copy functionality
    copyBtn.addEventListener('click', () => {
        outputCode.select();
        document.execCommand('copy');

        const originalText = copyBtn.textContent;
        copyBtn.textContent = 'Copied!';
        copyBtn.style.background = '#dbe9ff';

        setTimeout(() => {
            copyBtn.textContent = originalText;
            copyBtn.style.background = '';
        }, 2000);
    });
});
