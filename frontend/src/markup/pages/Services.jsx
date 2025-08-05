import Appointment from '../components/CTA/Appointment';
import PageTitle from '../components/PageTitle/PageTitle';
import Service from '../components/Service/Service'
import Video2nd from '../components/Video/Video2nd';
import WhyChoose from '../components/WhyChoose/WhyChoose'

function Services() {
  return (
    <>
      <PageTitle title="Services" pageName="Services" />
      <Service />
      <WhyChoose />
      <Video2nd />
      <Appointment />
    </>
  );
}

export default Services
