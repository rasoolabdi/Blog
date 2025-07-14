import Link from "next/link";

function BreadCrumbs({ breadcrumbs }) {
    return(
        <nav className="mb-8 block" aria-label="Breadcrumb">
            <ol className="flex text-lg gap-x-2">
                {breadcrumbs.map((breadcrumb , index) => (
                    <li
                        key={breadcrumb.href}
                        aria-current={breadcrumb.active}
                        className={`${
                            breadcrumb.active ? "text-secondary-700" : "text-secondary-500"
                        }
                            flex gap-x-2
                        `}
                    >
                        <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
                        {index < breadcrumbs.length - 1 ? (
                            <span className="inline-block">/</span>
                        ) : null}
                    </li>
                ))}
            </ol>
        </nav>
    )
};
export default BreadCrumbs;