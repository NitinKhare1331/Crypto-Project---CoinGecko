import ContentLoader from "react-content-loader";

const MyLoader = () => (
    <div className="h-[100vh] flex justify-center items-start mt-10">
        <ContentLoader>
          <span className="loading loading-dots loading-lg"></span>
        </ContentLoader>
    </div>
    
  );

export default MyLoader;