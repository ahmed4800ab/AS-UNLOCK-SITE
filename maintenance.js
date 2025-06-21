// A.S UNLOCK Maintenance Mode Controller
// للتحكم في وضع الصيانة

class MaintenanceMode {
    constructor() {
        this.maintenanceEnabled = false;
        this.checkMaintenanceStatus();
    }

    // التحقق من حالة الصيانة
    checkMaintenanceStatus() {
        // يمكن تفعيل الصيانة بعدة طرق:
        
        // الطريقة 1: عبر localStorage
        if (localStorage.getItem('maintenance_mode') === 'true') {
            this.enableMaintenance();
            return;
        }

        // الطريقة 2: عبر URL parameter
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('maintenance') === 'true') {
            this.enableMaintenance();
            return;
        }

        // الطريقة 3: عبر ملف خارجي (يمكن رفعه على الخادم)
        this.checkMaintenanceFile();
    }

    // التحقق من ملف الصيانة
    async checkMaintenanceFile() {
        try {
            const response = await fetch('maintenance.flag', { 
                method: 'HEAD',
                cache: 'no-cache'
            });
            if (response.ok) {
                this.enableMaintenance();
            }
        } catch (error) {
            // الملف غير موجود، الموقع يعمل طبيعي
            console.log('Maintenance mode is disabled');
        }
    }

    // تفعيل وضع الصيانة
    enableMaintenance() {
        if (window.location.pathname.includes('maintenance.html')) {
            return; // نحن بالفعل في صفحة الصيانة
        }
        
        this.maintenanceEnabled = true;
        window.location.href = 'maintenance.html';
    }

    // تفعيل الصيانة يدوياً (مخفي عن المستخدمين)
    static enable() {
        localStorage.setItem('maintenance_mode', 'true');
        window.location.reload();
    }

    // إلغاء الصيانة (مخفي عن المستخدمين)
    static disable() {
        localStorage.removeItem('maintenance_mode');
        if (window.location.pathname.includes('maintenance.html')) {
            window.location.href = 'index.html';
        }
    }

    // إنشاء ملف الصيانة (مخفي عن المستخدمين)
    static createMaintenanceFile() {
        const blob = new Blob(['maintenance'], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'maintenance.flag';
        a.click();
        URL.revokeObjectURL(url);
    }
}

// تفعيل النظام عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    new MaintenanceMode();
});

// تصدير الكلاس للاستخدام الخارجي (مخفي عن المستخدمين العاديين)
window.MaintenanceMode = MaintenanceMode; 