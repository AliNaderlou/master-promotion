import React from "react";
import NestedList from './menu-bar'
import '../Styles/promotion-form-page.scss'
import PromotionForm from './Form/promotion-form'
const UserPanelPage = () => (
  <section className="promotion-page">
    <div className="promotion-main">
     <PromotionForm />
    </div>
    <div className="promotion-menu">
    <NestedList selectedIndex={0} />
    </div>
  </section>
);
export default UserPanelPage;
