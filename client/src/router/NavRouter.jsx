import { AboutPage, BlogPage, CatalogPage, CategoryPage, ContactPage, HomePage, SigningPage } from "../pages";

export const NavRouter = [
    { id: 1, title: 'Home', path: '/', element: <HomePage /> },
    { id: 2, title: 'About Us', path: '/about', element: <AboutPage /> },
    { id: 3, title: 'Blog', path: '/blog', element: <BlogPage /> },
    { id: 4, title: 'Catalog', path: '/catalog', element: <CatalogPage /> },
    { id: 5, title: 'Catedories', path: '/categories', element: <CategoryPage /> },
    { id: 6, title: 'Contact', path: '/contact', element: <ContactPage /> },
    { id: 7, title: 'Sign In', path: '/sign', element: <SigningPage /> },
    { id: 8, title: 'Not Found', path: '*', element: <>404</> }
]
