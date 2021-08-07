import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Details from './components/features/checkout/details'
import Payment from './components/features/checkout/payment'
import { BlogPage } from './components/pages/blog-page'
import BlogPostPage from './components/pages/blog-post-page'
import CartPage from './components/pages/cart-page'
import ContactPage from './components/pages/contact-page'
import FriendPage from './components/pages/friend-page'
import HomePage from './components/pages/home-page'
import LoginPage from './components/pages/login-page'
import ProductDetailsPage from './components/pages/product-details-page'
import ProductsPage from './components/pages/products-page'
import RegisterPage from './components/pages/register-page'
import StoryPage from './components/pages/story-page'
import ThankYouPage from './components/pages/thank-you-page'

const Routes = () => {
    return (
        <Switch>
            <Route exact path='/' component={HomePage}/>
            <Route exact path='/products' component={ProductsPage}/>
            <Route exact path='/products/:id' component={ProductDetailsPage}/>            
            <Route exact path='/story' component={StoryPage}/>            
            <Route exact path='/friend' component={FriendPage}/>            
            <Route exact path='/contract' component={ContactPage}/>            
            <Route exact path='/cart' component={CartPage}/>            
            <Route exact path='/blog' component={BlogPage}/>            
            <Route exact path='/blog-post' component={BlogPostPage}/>            
            <Route exact path='/thankyou' component={ThankYouPage}/>            
            <Route exact path='/register' component={RegisterPage}/>            
            <Route exact path='/login' component={LoginPage}/>            
            <Route exact path='/payment' component={Payment}/>            
            <Route exact path='/details' component={Details}/>            
        </Switch>
    )
}

export default Routes
