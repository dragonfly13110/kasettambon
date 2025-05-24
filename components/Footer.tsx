
import React from 'react';

const GovernmentSealIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
    {/* This is a generic placeholder icon. A real Garuda emblem would be more complex. */}
    <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fill="#FFFFFF">ตรา</text>
  </svg>
);


export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-brand-green-darker text-white pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <GovernmentSealIcon className="h-10 w-10 mr-3 text-yellow-400" />
              <h3 className="text-xl font-semibold">คลังความรู้เกษตรตำบล</h3>
            </div>
            <p className="text-brand-green-light text-sm">
              สนับสนุนการทำงานของนักวิชาการส่งเสริมการเกษตรทั่วประเทศ
              โดย กรมส่งเสริมการเกษตร (ตัวอย่าง)
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">ลิงก์ที่เกี่ยวข้อง</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-yellow-300 transition-colors">กรมส่งเสริมการเกษตร</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">กระทรวงเกษตรและสหกรณ์</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">นโยบายเกษตร 4.0</a></li>
              <li><a href="#" className="hover:text-yellow-300 transition-colors">ฐานข้อมูลเกษตรกร</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-3">ติดต่อเรา (ตัวอย่าง)</h4>
            <address className="text-sm not-italic">
              <p>กรมส่งเสริมการเกษตร</p>
              <p>2143/1 ถนนพหลโยธิน แขวงลาดยาว</p>
              <p>เขตจตุจักร กรุงเทพฯ 10900</p>
              <p className="mt-2">โทรศัพท์: <a href="tel:02-579-0121" className="hover:text-yellow-300">02-579-0121</a></p>
              <p>อีเมล: <a href="mailto:info@doae.go.th" className="hover:text-yellow-300">info@doae.go.th</a></p>
            </address>
          </div>
        </div>
        <div className="border-t border-brand-green-dark pt-8 text-center text-sm text-brand-green-light">
          <p>&copy; {new Date().getFullYear()} กรมส่งเสริมการเกษตร (ตัวอย่าง). สงวนลิขสิทธิ์</p>
          <p>พัฒนาระบบโดย ทีมงานคลังความรู้เกษตรตำบล (ตัวอย่าง)</p>
        </div>
      </div>
    </footer>
  );
};
