export default function SkillsPage() {
    return (
        <>
            <section className="hero-section">
                <h2 className="page-title">Relevant Skills</h2>

                <section>
                    <h3>Security &amp; Risk Management</h3>
                    <p>
                        Incident Response | Vulnerability Assessment | Risk Analysis | Security Patching |
                        Compliance Auditing | Data Privacy &amp; Governance | Identity &amp; Access Management (IAM) |
                        Security Awareness Training
                    </p>
                </section>
            </section>

            <section className="rest-section">
                <section>
                    <h3>Infrastructure &amp; Networking</h3>
                    <p>
                        TCP/IP, DNS, DHCP, VPN, Firewalls | Virtualization (VMware, Hyper-V) |
                        Cloud Platforms (AWS, Azure) | System Performance Monitoring | Endpoint Protection
                    </p>
                </section>

                <br />

                <section>
                    <h3>Systems Administration</h3>
                    <p>
                        Active Directory &amp; User Access Management | Windows Server/Desktop | Linux Administration |
                        IT Service Management (ITSM) | Hardware/Software Troubleshooting | Asset &amp; Inventory Management
                    </p>
                </section>

                <br />

                <section>
                    <h3>Scripting &amp; Data Analysis</h3>
                    <p>
                        Python (Automation, Data Analysis) | SQL (Querying, Database Management) |
                        Bash/PowerShell Scripting | Java | Technical Documentation &amp; Reporting
                    </p>
                </section>

                <br />

                <section>
                    <h3>Collaboration Tools</h3>
                    <p>
                        Google Workspace | Microsoft 365 | Microsoft Teams | Zoom |
                        Ticketing Systems (ServiceNow, etc.)
                    </p>
                </section>
            </section>
        </>
    );
}