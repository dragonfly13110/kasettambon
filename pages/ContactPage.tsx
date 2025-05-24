import React from 'react';
import { Section } from '../components/Section';
import { PageKey } from '../types';

interface PageProps {
  navigateTo: (page: PageKey) => void;
}

const GovernmentSealIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
    <text x="50%" y="60%" dominantBaseline="middle" textAnchor="middle" fontSize="10" fill="#FFFFFF">ตรา</text>
  </svg>
);


const ContactPage: React.FC<PageProps> = ({ navigateTo }) => {
  return (
    <Section id="contact-page" title="ติดต่อเรา">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="text-center mb-8">
          <GovernmentSealIcon className="h-20 w-20 mx-auto mb-4 text-brand-green-dark" />
          <h3 className="text-2xl font-semibold text-brand-green-darker">กรมส่งเสริมการเกษตร</h3>
          <p className="text-brand-text mt-2">
            ท่านสามารถติดต่อกรมส่งเสริมการเกษตร หรือหน่วยงานที่เกี่ยวข้องได้ตามข้อมูลด้านล่างนี้
            หรือหากมีข้อสงสัยเกี่ยวกับการใช้งานเว็บไซต์คลังความรู้เกษตรตำบล สามารถสอบถามได้เช่นกัน
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-semibold text-brand-green-darker mb-3">ที่อยู่</h4>
            <address className="text-brand-text not-italic leading-relaxed">
              <p>กรมส่งเสริมการเกษตร</p>
              <p>2143/1 ถนนพหลโยธิน แขวงลาดยาว</p>
              <p>เขตจตุจักร กรุงเทพฯ 10900</p>
            </address>
          </div>
          <div>
            <h4 className="text-xl font-semibold text-brand-green-darker mb-3">ช่องทางติดต่อ</h4>
            <p className="text-brand-text leading-relaxed">
              <strong>โทรศัพท์:</strong> <a href="tel:02-579-0121" className="text-brand-green hover:text-brand-green-darker hover:underline">02-579-0121</a> ถึง 28
            </p>
            <p className="text-brand-text leading-relaxed">
              <strong>โทรสาร:</strong> 02-579-3817 (ตัวอย่าง)
            </p>
            <p className="text-brand-text leading-relaxed">
              <strong>อีเมล:</strong> <a href="mailto:info@doae.go.th" className="text-brand-green hover:text-brand-green-darker hover:underline">info@doae.go.th</a> (ตัวอย่าง)
            </p>
             <p className="text-brand-text leading-relaxed mt-2">
              <strong>เว็บไซต์:</strong> <a href="https://www.doae.go.th" target="_blank" rel="noopener noreferrer" className="text-brand-green hover:text-brand-green-darker hover:underline">www.doae.go.th</a>
            </p>
          </div>
        </div>
        
        <div className="mt-10 p-6 bg-brand-green-light rounded-lg">
            <h4 className="text-xl font-semibold text-brand-green-darker mb-3 text-center">แบบฟอร์มติดต่อ (ตัวอย่าง)</h4>
            <p className="text-brand-text text-center mb-4">
                หากท่านต้องการส่งข้อเสนอแนะ หรือสอบถามข้อมูลเพิ่มเติม สามารถกรอกแบบฟอร์มด้านล่างนี้ (ส่วนนี้เป็นเพียงตัวอย่าง UI เท่านั้น ยังไม่มีฟังก์ชันการทำงานจริง)
            </p>
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-brand-text">ชื่อ-นามสกุล</label>
                    <input type="text" name="name" id="name" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm" placeholder="กรอกชื่อและนามสกุลของท่าน" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-brand-text">อีเมลติดต่อกลับ</label>
                    <input type="email" name="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm" placeholder="example@email.com" />
                </div>
                <div>
                    <label htmlFor="message" className="block text-sm font-medium text-brand-text">ข้อความ</label>
                    <textarea id="message" name="message" rows={4} className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-green focus:border-brand-green sm:text-sm" placeholder="กรอกข้อความที่ท่านต้องการติดต่อสอบถามหรือเสนอแนะ"></textarea>
                </div>
                <div className="text-center">
                    <button type="submit" onClick={(e)=> e.preventDefault()} className="inline-flex justify-center py-2 px-6 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-brand-green hover:bg-brand-green-darker focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green-dark">
                        ส่งข้อความ (ตัวอย่าง)
                    </button>
                </div>
            </form>
        </div>

      </div>
    </Section>
  );
};

export default ContactPage;