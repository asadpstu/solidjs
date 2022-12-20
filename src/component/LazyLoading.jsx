import LoadingImage from "../assets/loading.gif"

const LazyLoading = () => {
    console.log("Lazyloading")
    return (
        <div style="z-index:999;padding-left:45%;padding-top:20%">
            <img src={LoadingImage} height="40"/>
        </div>
    )
}

export default LazyLoading;