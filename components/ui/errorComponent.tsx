export default function ErrorComponent({ message }) {
    return (
        <div className="w-full flex justify-center items-center py-10">
            <p className="">
                {message || "Something went wrong!"}
            </p>
        </div>
    )
}

