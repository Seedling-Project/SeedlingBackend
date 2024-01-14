import React from "react";

const Research: React.FC = () => {
    return (<>
            <div className="collapse collapse-arrow bg-base-200" id="researchGeneral">
                <input type="radio" name="my-accordion-2" checked={true}/>
                <div className="collapse-title text-xl font-medium">
                    General Information
                </div>
                <div className="collapse-content">
                    <p>This is supposed to be from the database</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200" id="researchLinks">
                <input type="radio" name="my-accordion-2"/>
                <div className="collapse-title text-xl font-medium">
                    Links to Opportunities
                </div>
                <div className="collapse-content">
                    <p>This is supposed to be from the database</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200" id="researchEtap">
                <input type="radio" name="my-accordion-2"/>
                <div className="collapse-title text-xl font-medium">
                    Guide to Using NSF Etap Website for REU Applications (etap.nsf.gov)
                </div>
                <div className="collapse-content">
                    <p>This is supposed to be from the database</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200" id="researchSULI">
                <input type="radio" name="my-accordion-2"/>
                <div className="collapse-title text-xl font-medium">
                    SULI Application Guide
                </div>
                <div className="collapse-content">
                    <p>This is supposed to be from the database</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-base-200" id="researchCold">
                <input type="radio" name="my-accordion-2"/>
                <div className="collapse-title text-xl font-medium">
                    Cold Emailing Professors Guide
                </div>
                <div className="collapse-content">
                    <p>This is supposed to be from the database</p>
                </div>
            </div>
        </>
    )
}

export default Research;