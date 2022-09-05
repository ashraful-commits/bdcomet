import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync, writeFileSync } from 'fs';

// init dirname
const __dirname = dirname(fileURLToPath(import.meta.url));

// export file
export const homePageShow = (req, res) => {
  res.render('index');
};
export const homePageShowTwo = (req, res) => {
  res.render('index-2');
};
export const homePageShowThree = (req, res) => {
  res.render('index-02');
};
export const homePageShowFour = (req, res) => {
  res.render('index-03');
};
export const homePageShowFive = (req, res) => {
  res.render('index-04');
};
export const homePageShowSix = (req, res) => {
  res.render('index-op-01');
};
export const homePageShowSeven = (req, res) => {
  res.render('index-op-02');
};
export const homePageShowEight = (req, res) => {
  res.render('index-op-03');
};
export const homePageShowNine = (req, res) => {
  res.render('index-op-04');
};
export const homePageShowTen = (req, res) => {
  res.render('index-op');
};
export const blogFixedImage = (req, res) => {
  const post = readFileSync(path.join(__dirname, '../db/post.json'));
  res.render('blog-fixed-image', {
    post: JSON.parse(post.toString()),
  });
};
export const blogMasonrySidebarLeft = (req, res) => {
  const masonryBlog = readFileSync(
    path.join(__dirname, '../db/masonry-post.json')
  );
  res.render('blog-masonry-sidebar-left', {
    masonryBlog: JSON.parse(masonryBlog.toString()),
  });
};
export const blogMasonrySidebar = (req, res) => {
  const masonryBlog = readFileSync(
    path.join(__dirname, '../db/masonry-post.json')
  );
  res.render('blog-masonry-sidebar', {
    masonryBlog: JSON.parse(masonryBlog.toString()),
  });
};
export const blogMasonry = (req, res) => {
  const masonryBlog = readFileSync(
    path.join(__dirname, '../db/masonry-post.json')
  );
  res.render('blog-masonry', {
    masonryBlog: JSON.parse(masonryBlog.toString()),
  });
};
export const blogSidebarLeft = (req, res) => {
  const masonryBlog = readFileSync(
    path.join(__dirname, '../db/masonry-post.json')
  );
  res.render('blog-sidebar-left', {
    masonryBlog: JSON.parse(masonryBlog.toString()),
  });
};
export const blogSidebar = (req, res) => {
  const masonryBlog = readFileSync(
    path.join(__dirname, '../db/masonry-post.json')
  );
  res.render('blog-sidebar', {
    masonryBlog: JSON.parse(masonryBlog.toString()),
  });
};
export const blogSingleSidebarLeft = (req, res) => {
  const masonryBlog = readFileSync(
    path.join(__dirname, '../db/masonry-post.json')
  );
  res.render('blog-single-sidebar-left', {
    masonryBlog: JSON.parse(masonryBlog.toString()),
  });
};
export const blogSingleSidebar = (req, res) => {
  const masonryBlog = readFileSync(
    path.join(__dirname, '../db/masonry-post.json')
  );
  res.render('blog-single-sidebar', {
    masonryBlog: JSON.parse(masonryBlog.toString()),
  });
};
export const blogSingle = (req, res) => {
  const masonryBlog = readFileSync(
    path.join(__dirname, '../db/masonry-post.json')
  );
  res.render('blog-single', {
    masonryBlog: JSON.parse(masonryBlog.toString()),
  });
};
export const blogpageShow = (req, res) => {
  const masonryBlog = readFileSync(
    path.join(__dirname, '../db/masonry-post.json')
  );
  res.render('blog', {
    masonryBlog: JSON.parse(masonryBlog.toString()),
  });
};
export const elementsAccordions = (req, res) => {
  res.render('elements-accordions');
};
export const elementsAlerts = (req, res) => {
  res.render('elements-alerts');
};
export const elementsBars = (req, res) => {
  res.render('elements-bars');
};
export const elementsButtons = (req, res) => {
  res.render('elements-buttons');
};
export const elementsCountdowns = (req, res) => {
  res.render('elements-countdowns');
};
export const elementsFeatures = (req, res) => {
  res.render('elements-features');
};
export const elementsForms = (req, res) => {
  res.render('elements-forms');
};
export const elementsGrid = (req, res) => {
  res.render('elements-grid');
};
export const elementsIcons = (req, res) => {
  res.render('elements-icons');
};
export const elementsMedia = (req, res) => {
  res.render('elements-media');
};
export const elementsSliders = (req, res) => {
  res.render('elements-sliders');
};
export const elementsTabs = (req, res) => {
  res.render('elements-tabs');
};
export const elementsTitls = (req, res) => {
  res.render('elements-titles');
};
export const elementsTypography = (req, res) => {
  res.render('elements-typography');
};
export const homeArchitecture = (req, res) => {
  res.render('home-architecture');
};

export const homeFitness = (req, res) => {
  res.render('home-fitness');
};
export const homeLanding = (req, res) => {
  res.render('home-landing');
};
export const homeModels = (req, res) => {
  res.render('home-models');
};
export const homePhotography = (req, res) => {
  res.render('home-photography');
};
export const homeRestaurant = (req, res) => {
  res.render('home-restaurant');
};
export const homeResume = (req, res) => {
  res.render('home-resume');
};
export const page404 = (req, res) => {
  res.render('page-404');
};
export const pageAboutTwo = (req, res) => {
  res.render('page-about-2');
};
export const pageAbout = (req, res) => {
  res.render('page-about');
};
export const pageCareers = (req, res) => {
  res.render('page-careers');
};
export const pageCommingSoon = (req, res) => {
  res.render('page-Coming-soon');
};
export const pageContactTwo = (req, res) => {
  res.render('page-Contact-2');
};
export const pageContact = (req, res) => {
  res.render('page-Contact');
};
export const pageFaq = (req, res) => {
  res.render('page-faq');
};
export const pageLogin = (req, res) => {
  res.render('page-login');
};
export const pagePricing = (req, res) => {
  res.render('page-pricing');
};
export const pageServicesTwo = (req, res) => {
  res.render('page-services-2');
};
export const pageServices = (req, res) => {
  res.render('page-services');
};
export const portFolioBoxedTwoCol = (req, res) => {
  res.render('portfolio-boxed-2col');
};
export const portFolioBoxedThreeCol = (req, res) => {
  res.render('portfolio-boxed-3col');
};
export const portFolioSingleOne = (req, res) => {
  res.render('portfolio-single-1');
};
export const portFolioSingleTwo = (req, res) => {
  res.render('portfolio-single-2');
};
export const portFolioSingleThree = (req, res) => {
  res.render('portfolio-single-3');
};
export const portFolioWideTwoCol = (req, res) => {
  res.render('portfolio-wide-2col');
};
export const portFolioWideThreeCol = (req, res) => {
  res.render('portfolio-wide-3col');
};
export const shopTwoCol = (req, res) => {
  const product = readFileSync(
    path.join(__dirname, '../db/product.json')
  );
  const bags = readFileSync(path.join(__dirname, '../db/bags.json'));
  const beauty = readFileSync(
    path.join(__dirname, '../db/beauty.json')
  );
  const blazers = readFileSync(
    path.join(__dirname, '../db/blazers.json')
  );
  const dresses = readFileSync(
    path.join(__dirname, '../db/dresses.json')
  );
  const jeans = readFileSync(
    path.join(__dirname, '../db/jeans.json')
  );
  res.render('shop-2col', {
    product: JSON.parse(product.toString()),
    bags: JSON.parse(bags.toString()),
    beauty: JSON.parse(beauty.toString()),
    blazers: JSON.parse(blazers.toString()),
    dresses: JSON.parse(dresses.toString()),
    jeans: JSON.parse(jeans.toString()),
    parid: req.params.id,
  });
};

// shop three
export const shopThreeCol = (req, res) => {
  const product = readFileSync(
    path.join(__dirname, '../db/product.json')
  );
  res.render('shop-3col', {
    product: JSON.parse(product.toString()),
  });
};
export const shopFourCol = (req, res) => {
  const product = readFileSync(
    path.join(__dirname, '../db/product.json')
  );
  res.render('shop-4col', {
    product: JSON.parse(product.toString()),
  });
};
export const shopCart = (req, res) => {
  res.render('shop-cart');
};
export const shopCheckout = (req, res) => {
  res.render('shop-checkout');
};
export const shopSingle = (req, res) => {
  res.render('shop-single');
};
export const shopSingleviw = (req, res) => {
  const product = JSON.parse(
    readFileSync(path.join(__dirname, '../db/product.json'))
  );
  const vProduct = product.find((data) => data.id == req.params.id);
  res.render('shop-single', {
    productF: vProduct,
    product: product,
  });
};
export const shopSingleviwsingle = (req, res) => {
  const product = JSON.parse(
    readFileSync(path.join(__dirname, '../db/product.json'))
  );
  const vProduct = product.find((data) => data.id == req.params.id);
  res.render('shop-single', {
    productF: vProduct,
  });
};

// database

export const allProduct = (req, res) => {
  const product = readFileSync(
    path.join(__dirname, '../db/product.json')
  );
  res.render('database/allProduct', {
    product: JSON.parse(product.toString()),
  });
};
export const addProduct = (req, res) => {
  const product = JSON.parse(
    readFileSync(path.join(__dirname, '../db/product.json'))
  );
  const { title, photo, dis, oldprice, newprice } = req.body;
  product.push({
    id: product.length - 1 + 2,
    title: title,
    photo: req.file.filename,
    dis: dis,
    oldprice: oldprice,
    newprice: newprice,
  });
  // whit file
  writeFileSync(
    path.join(__dirname, '../db/product.json'),
    JSON.stringify(product)
  );
  // redirect
  res.redirect('/allproduct');
};
export const createProduct = (req, res) => {
  res.render('database/createProduct');
};
export const editProduct = (req, res) => {
  res.render('database/editProduct');
};
export const viewProduct = (req, res) => {
  res.render('database/viewProduct');
};
