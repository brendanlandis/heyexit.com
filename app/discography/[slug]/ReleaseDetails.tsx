import HeaderText from "@/app/components/HeaderText";
import { Release } from "@/app/types";

interface ReleaseDetailsProps {
    release: Release;
}

export default function ReleaseDetails({ release }: ReleaseDetailsProps) {
    return <>
        <HeaderText text={release.title} compressor={1.5} />
    </>;
}
