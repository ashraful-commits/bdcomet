import express from 'express';
import {
  addProduct,
  allProduct,
  blogFixedImage,
  blogMasonry,
  blogMasonrySidebar,
  blogMasonrySidebarLeft,
  blogpageShow,
  blogSidebar,
  blogSidebarLeft,
  blogSingle,
  blogSingleSidebar,
  blogSingleSidebarLeft,
  createProduct,
  deleteProduct,
  editProduct,
  elementsAccordions,
  elementsAlerts,
  elementsBars,
  elementsButtons,
  elementsCountdowns,
  elementsFeatures,
  elementsForms,
  elementsGrid,
  elementsIcons,
  elementsMedia,
  elementsSliders,
  elementsTabs,
  elementsTitls,
  elementsTypography,
  homeArchitecture,
  homeFitness,
  homeLanding,
  homeModels,
  homePageShow,
  homePageShowEight,
  homePageShowFive,
  homePageShowFour,
  homePageShowNine,
  homePageShowSeven,
  homePageShowSix,
  homePageShowTen,
  homePageShowThree,
  homePageShowTwo,
  homePhotography,
  homeRestaurant,
  homeResume,
  page404,
  pageAbout,
  pageAboutTwo,
  pageCareers,
  pageContact,
  pageContactTwo,
  pageFaq,
  pageLogin,
  pagePricing,
  pageServices,
  pageServicesTwo,
  portFolioBoxedThreeCol,
  portFolioBoxedTwoCol,
  portFolioSingleOne,
  portFolioSingleThree,
  portFolioSingleTwo,
  portFolioWideThreeCol,
  portFolioWideTwoCol,
  shopCart,
  shopCheckout,
  shopFourCol,
  shopSingle,
  shopSingleviw,
  shopSingleviwsingle,
  shopThreeCol,
  shopTwoCol,
  updateProduct,
  viewProduct,
} from '../controllers/pageController.js';
import { productMulter } from '../middlerwares/pageMiddlerwares.js';

// init router
export const router = express.Router();

router.get('/', homePageShow);
router.get('/home', homePageShowTwo);
router.get('/home', homePageShowThree);
router.get('/home', homePageShowFour);
router.get('/home', homePageShowFive);
router.get('/home', homePageShowSix);
router.get('/home', homePageShowSeven);
router.get('/home', homePageShowEight);
router.get('/home', homePageShowNine);
router.get('/home', homePageShowTen);
router.get('/blog-fixed-image', blogFixedImage);
router.get('/blog-masonry-sidebar-left', blogMasonrySidebarLeft);
router.get('/blog-masonry-sidebar', blogMasonrySidebar);
router.get('/blog-masonry', blogMasonry);
router.get('/blog-sidebar-left', blogSidebarLeft);
router.get('/blog-sidebar', blogSidebar);
router.get('/blog-single-sidebar-left', blogSingleSidebarLeft);
router.get('/blog-single-sidebar', blogSingleSidebar);
router.get('/blog-single', blogSingle);
router.get('/blog', blogpageShow);
router.get('/elements-accordions', elementsAccordions);
router.get('/elements-alerts', elementsAlerts);
router.get('/elements-bars', elementsBars);
router.get('/elements-buttons', elementsButtons);
router.get('/elements-countdowns', elementsCountdowns);
router.get('/elements-features', elementsFeatures);
router.get('/elements-forms', elementsForms);
router.get('/elements-grid', elementsGrid);
router.get('/elements-icons', elementsIcons);
router.get('/elements-media', elementsMedia);
router.get('/elements-sliders', elementsSliders);
router.get('/elements-tabs', elementsTabs);
router.get('/elements-titles', elementsTitls);
router.get('/elements-typography', elementsTypography);
router.get('/home-architecture', homeArchitecture);
router.get('/home-fitness', homeFitness);
router.get('/home-landing', homeLanding);
router.get('/home-models', homeModels);
router.get('/home-photography', homePhotography);
router.get('/home-restaurant', homeRestaurant);
router.get('/home-resume', homeResume);
router.get('/page-404', page404);
router.get('/page-about-2', pageAboutTwo);
router.get('/page-about', pageAbout);
router.get('/page-careers', pageCareers);
router.get('/page-coming-soon', pageCareers);
router.get('/page-contact-2', pageContactTwo);
router.get('/page-contact', pageContact);
router.get('/page-faq', pageFaq);
router.get('/page-pricing', pagePricing);
router.get('/page-services-2', pageServicesTwo);
router.get('/page-services', pageServices);
router.get('/page-login', pageLogin);
router.get('/portfolio-boxed-2col', portFolioBoxedTwoCol);
router.get('/portfolio-boxed-3col', portFolioBoxedThreeCol);
router.get('/portfolio-single-1', portFolioSingleOne);
router.get('/portfolio-single-2', portFolioSingleTwo);
router.get('/portfolio-single-3', portFolioSingleThree);
router.get('/portfolio-wide-2col', portFolioWideTwoCol);
router.get('/portfolio-wide-3col', portFolioWideThreeCol);
router.get('/shop-2col', shopTwoCol);
router.get('/shop-3col', shopThreeCol);
router.get('/shop-4col', shopFourCol);
router.get('/shop-cart', shopCart);
router.get('/shop-checkout', shopCheckout);
router.get('/shop-single', shopSingle);
router.get('/shop-2col/:id', shopSingleviw);
router.get('/shop-2col/:id/:id', shopSingleviwsingle);
router.get('/shop-3col/:id', shopSingleviw);
router.get('/shop-4col/:id', shopSingleviw);

// database product
router.get('/allproduct', allProduct);
// create data
router.get('/createproduct', createProduct);
router.post('/createproduct', productMulter, addProduct);
// edit data
router.get('/editproduct/:id', editProduct);
router.post('/editproduct/:id', productMulter, updateProduct);
// view product
router.get('/viewproduct/:id', viewProduct);
// delete product
router.get('/delete/:id', deleteProduct);
