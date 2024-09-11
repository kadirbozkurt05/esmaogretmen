import { useState } from 'react';

const TermsAndConditions = () => {
  const [accepted, setAccepted] = useState(false);

  const handleAcceptance = () => {
    setAccepted(!accepted);
  };

  return (
    <div className=' text-black text-sm'>
      <h2 className=' text-center'>Şartlar ve Koşullar</h2>
      <p>
        Bu internet sitesine erişerek veya bu siteyi kullanarak, aşağıdaki şartları ve koşulları kabul etmiş sayılırsınız:
      </p>
      <ol>
        <li>Siteyi kullanarak, bu şartlara ve koşullara bağlı kalacağınızı kabul edersiniz.</li>
        <li>Siteyi yasal amaçlar için kullanmayı kabul edersiniz.</li>
        <li>Siteye zarar verecek, siteyi aşırı yükleyecek veya siteyi kullanılamaz hale getirecek herhangi bir eylemi gerçekleştirmeyeceksiniz.</li>
        <li>Gizlilik Politikamızı kabul edersiniz.</li>
      </ol>

    </div>
  );
};

export default TermsAndConditions;
