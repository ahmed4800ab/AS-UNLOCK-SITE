# 🛠️ دليل التحكم في وضع الصيانة - A.S UNLOCK

## 📋 الحالة الحالية
✅ **وضع الصيانة مفعل** - ملف `maintenance.flag` موجود

## 🎯 طرق التحكم السريعة

### 1️⃣ **إلغاء الصيانة (إعادة تشغيل الموقع)**
```bash
# احذف ملف الصيانة
rm maintenance.flag
```

### 2️⃣ **تفعيل الصيانة**
```bash
# أنشئ ملف الصيانة
echo "maintenance_active" > maintenance.flag
```

### 3️⃣ **اختبار النظام**
افتح `test-maintenance.html` في المتصفح لاختبار النظام

## 🔧 طرق التحكم المتقدمة

### عبر المتصفح (F12)
```javascript
// تفعيل الصيانة
localStorage.setItem('maintenance_mode', 'true');
location.reload();

// إلغاء الصيانة
localStorage.removeItem('maintenance_mode');
location.reload();
```

### عبر URL
```
# تفعيل الصيانة مؤقتاً
https://yourdomain.com/index.html?maintenance=true
```

### عبر أزرار التحكم المخفية
1. اذهب إلى صفحة الصيانة
2. اضغط `Ctrl + Shift + A`
3. ستظهر أزرار التحكم

## 📁 الملفات المهمة
- `maintenance.flag` - ملف تفعيل الصيانة
- `maintenance.html` - صفحة الصيانة
- `maintenance.js` - نظام التحكم
- `test-maintenance.html` - صفحة الاختبار

## 🚀 رفع الملفات على الاستضافة
1. ارفع جميع الملفات إلى مجلد الموقع
2. تأكد من وجود ملف `maintenance.flag` لتفعيل الصيانة
3. احذف الملف لإلغاء الصيانة

## 📞 الدعم
للحصول على الدعم: 01069062005 (واتساب) 