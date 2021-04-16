export default async () => {

    await new Promise(res => setTimeout(res, 500));

    console.log("cookie");
    console.log(document.cookie.includes("swr-test-token=swr"));
    if (document.cookie.includes("swr-test-token=swr")) {
        return {
            name: "Shu",
            avatar: "https://github.com/shuding.png"
        };
    }

    console.log("api-user if ");
    const error = new Error("Not authorized!");
    error.status = 403;
    throw error;
};
