# Coin gecko Crypto tracker App

Coin gecko crypto tracker is a web based application which uses **CoinGecko free api** to fetch varoius details such as coin name, market price, market cap, charts, etc.

This all project is created using ***vite react with tailwind installed as pa package.***

* At first the **Home** page consist of a **Navbar** which is used from ***DaisyUI***. DaisyUI is installed as npm in the project.

* Navbar is shared througout the ui of the app using **outlet** which is the feature of **react-router-dom** in a component **Layout**. This Layout component is used where ever we want a navbar.

* Navbar consist of a drop down which gives options to choose between 2 currencies i.e usd and inr. A **currency store** is set up using ***zustand*** which is again installed as a npm, using which currency is available all over the application across components. **Zustand Store** is used over **prop drilling** and **context API** because it can be efficiently used over te other two.

* Navbar consist of a search input where you can search the coin and click on a particular coin to get to the details page of the coin. Search is implemented using **debounce** which simply means the result based on your search comes with a delay so that there is no bombardment of api calls to the api server of coinGecko. **useDebounce** is a custom hook created for the implementation of seaarch delay which is then used in **Search** component.

* Navbar consist of a **theme switch** from dark to light and vice-versa which is implemented using daisy UI. The theme is set as local storage of the browser so that on refresh the current applied theme doesnt changes.

* Home page consist of a banner which is made as a compoponent so that it can be reused.

* The last and most important part of home page is the coin table which consist of coin image, coin name, price, 24h change and market cap. The data of the table is fetched from coinGekcko API.

* **Pagination** is implemented for abstract search which shows 20 results at first. You can easily paginate using **prev** and **next** button on the home page.

 _Note:For every API call a service is created which uses **axois Instance**. Then wherever that particular service is used in a component or a hook, it is called using **UseQuery** hook provided by node as a npm **tanstack/query**. useQuery is used over useEffect because useQuery provides internal functions which consist as 3rd parameter which is basically a object that consist of retry, delay, cacheTime, staleTime, etc and return an object which consist of data, isLoading, isError, etc. Depending on the use case we can use these._

* **Custom error boundary** is used for error resolution. In case of anything wrong happens the user should not see the blank page , he should see some error message on the screen. This may happen due to many reason. One of them is api timed out. It is intalled as npm from **react-error-boundary**.

* Now let us come to next page that is coin details page.**Routing** is implemented so that switching between pages does not refresh the application. 

* Coin details page is divided into two parts, one is coin description and other half is coin charts.

* Coin description consist of description of the coin, its rank as well as current price.

* The chart area consist of three chart i.e price, market cap, total volume chart which are implemented using **chart.js**.

* It consist of dropdown where we can select the particular time and days for which we want the data.