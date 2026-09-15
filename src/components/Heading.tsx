"use client";

interface HeadingProps {
    heading: string,
    subHeading?: string,
    center?: boolean,
}

const Heading: React.FC<HeadingProps> = ({
    heading, subHeading, center
}) => {
    return (
        <div className={center ? "text-center" : "text-start"}>
            <div className="text-2xl md:text-3xl font-medium md:font-semibold">
                {heading}
            </div>
            <div className="mt-2 text-sm md:text-base font-normal text-neutral-500">
                {subHeading}
            </div>
        </div>
    )
}

export default Heading