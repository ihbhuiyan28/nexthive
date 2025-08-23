'use client'

import Link from 'next/link';

export default function Footer() {
    return (
        <footer
            className="border-t-2 min-h-12 flex items-center justify-center md:min-h-16"
            aria-label="Footer"
        >
            <div className="w-full">
                <p className="text-center">
                    Built by {' '}
                    <Link
                        href="https://www.linkedin.com/in/ihbhuiyan28/"
                        target="_blank"
                        className="font-bold"
                        rel="noopener noreferrer"
                        aria-label="ihbhuiyan28 LinkedIn"
                    >
                        ihbhuiyan28
                    </Link> {' '}
                    at {' '}
                    <Link
                        href="https://vercel.com/"
                        target="_blank"
                        className="font-bold"
                        rel="noopener noreferrer"
                        aria-label="Vercel"
                    >
                        Vercel
                    </Link>.
                </p>
                <p className="text-center">
                    Source code available on {' '}
                    <Link
                        href="https://github.com/ihbhuiyan28/nexthive"
                        target="_blank"
                        className="font-bold"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                    >
                        GitHub
                    </Link>.
                </p>
            </div>
        </footer>
    );
}
