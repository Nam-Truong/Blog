---
title: Dodgy Windows KB5009543 & KB5009566 updates
description: L2TP VPN connections broken by KB5009543 and KB5009566 updates
img: /blog/images/Dodgy-Windows-KB5009543-KB5009566-updates/broken-windows-post-icon.jpg
alt: Dodgy Windows KB5009543 & KB5009566 updates
author: nam-truong-1990
---

# January-2022 Windows Updates

On January 11th, Microsoft released Windows updates to fix security vulnerabilities and bugs as part of the January 2022 Patch.

These updates include KB5009566 for Windows 11 and KB5009543 for Windows 10 2004, 20H1, and 21H1.

Windows 10 users and administrators report problems making L2TP VPN connections after installing the recent Windows 10 KB5009543 and Windows 11 KB5009566 cumulative updates.


<br/>

# Updates breaking L2TP connections


<img src="/blog/images/Dodgy-Windows-KB5009543-KB5009566-updates/failed-connecting-to-VPN.jpg" alt="windows updates" title="Windows-KB5009543-KB5009566-updates" width="80%"/>

<br/>
<br/>

# Microsoft confirms bug, provides mitigation
Microsoft confirmed on Thursday that "Certain IPSEC connections might fail" and that they will fix the issue in an upcoming release of Windows.

```console
"After installing KB5009543, IP Security (IPSEC) connections which contain a Vendor ID might fail. VPN connections using Layer 2 Tunneling Protocol (L2TP) or IP security Internet Key Exchange (IPSEC IKE) might also be affected."
```


Microsoft states that it may be possible to mitigate the bug by disabling the 'Vendor ID,' if possible, on the VPN server.

"_To mitigate the issue for some VPNs, you can disable Vendor ID within the server-side settings. Note: Not all VPN servers have the option to disable Vendor ID from being used_," Microsoft explains in a new known update issue.


Windows users can remove the KB5009566 and KB5009543 updates using the following commands from an Elevated Command Prompt.

```console
 Windows 10: wusa /uninstall /kb:5009543
 Windows 11: wusa /uninstall /kb:5009566
```
<br/>

# Uninstall Windows KB5009543 & KB5009566 updates

Here are the steps to uninstall the patch **KB5009566** (for _Windows 11_) or **KB5009543** (on _Windows 10_).

  - Go to _Control Panel_ --> _Programs_ --> _Programs and Features_ --> _Installed Updates_
  - Depending on your OS click the patch **KB5009566** (for _Windows 11_) or **KB5009543** (on _Windows 10_) -->
  - Click _Uninstall_
  - Once the uninstallation is completed, reboot your machine and try connecting to VPN.

<br/><br/>
# References

1. [bleepingcomputer - New Windows KB5009543, KB5009566 updates break L2TP VPN connections](https://www.bleepingcomputer.com/news/microsoft/new-windows-kb5009543-kb5009566-updates-break-l2tp-vpn-connections/)


<info-box placeholder=''>
  <template #info-box >
   
  </template>
</info-box>