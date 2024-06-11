export default function SubscriptionDetail({
    name,
    isPremium,
    remainingActiveDays,
    activeDays,
}) {
    const remainingDays = activeDays - remainingActiveDays;
    const loadingProgress = () => {
        const progress = remainingDays / activeDays;
        if (progress < 0.25) {
            return "w-3/12";
        } else if (progress < 0.5) {
            return "w-6/12";
        } else if (progress < 0.75) {
            return "w-9/12";
        } else {
            return "w-full";
        }
    };

    return (
        <>
            {/* BASIC */}
            {!isPremium && (
                <div className="mt-auto pr-8">
                    <div className="p-5 bg-white rounded-2xl outline outline-1 outline-gray-200">
                        <div className="text-black text-lg font-semibold mb-8">
                            {name}
                        </div>
                        <div className="text-black text-sm mb-2">
                            {remainingActiveDays} of {activeDays} hari
                        </div>
                        <div className="rounded-full w-full h-1.5 bg-gray-200">
                            <div className="rounded-full h-full w-2/12 bg-orange-500"></div>
                        </div>
                    </div>
                </div>
            )}

            {/* PREMIUM */}
            {isPremium && (
                <div className="mt-auto pr-8">
                    <div className="p-5 bg-black rounded-2xl">
                        <img src="/icons/ic_star-rounded.svg" alt="Star Icon" />
                        <div className="text-white text-lg font-semibold mt-4 mb-8">
                            {name}
                        </div>
                        <div className="text-white text-sm mb-2">
                            {remainingActiveDays} of {activeDays} hari
                        </div>
                        <div className="rounded-full w-full h-1.5 bg-gray-800">
                            <div
                                className={`rounded-full h-full bg-orange-500 ${loadingProgress()}`}
                            ></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
