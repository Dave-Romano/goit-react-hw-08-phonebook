import ContactList from "../components/ContactList/ContactList";
import Filter from "../components/Filter/Filter";
import Form from "../components/Form/Form";
import Navigation from "../components/Navigation/Navigation";

const ProfilePage = () => {
  return (
    <>
      <Navigation />
      <Form />
      <ContactList />
      <Filter />
    </>
  );
};

export default ProfilePage;
