import { Fragment } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { publicRoutes } from '~/routes';
import { DefaultLayout } from '~/components/Layout';

function App() {
    return (
        <Router>
            <div>
                <h1>Cấu hình Router/Layout cho dự án</h1>

                <Routes>
                    {publicRoutes.map((route, index) => {
                        const Layout =
                            route.layout === null
                                ? Fragment
                                : route.layout || DefaultLayout;
                        // let Layout = DefaultLayout;
                        // if (route.layout) {
                        //     Layout = route.layout;
                        // } else if (route.layout === null) {
                        //     Layout = Fragment;
                        // }

                        const Page = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
