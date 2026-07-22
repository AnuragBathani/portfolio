---
title: "The Internet Is Running on Fumes. Someone Just Proposed IPv8."
date: 2026-04-28
category: "Networking"
excerpt: "And no, they didn't skip IPv6 -- they just think it failed. A deep dive into the IETF Internet-Draft proposing IPv8 and why it might actually succeed where IPv6 didn't."
---

## Once Upon a Time, 4.3 Billion Was "More Than Enough"

Picture this: it's 1981. The internet is a quirky research project connecting a handful of universities. Someone designs IPv4 -- a system that gives every device on the network a unique 32-bit address. That's roughly 4.3 billion possible addresses.

"That'll last forever," they probably said, the same way someone in 1999 said "640 KB of RAM is enough for anyone."

Fast forward to 2011. IANA, the organization that hands out IP address blocks, officially ran out. Every. Single. One. Allocated. Gone.

We didn't panic. We did what engineers always do -- we duct-taped it.

## The Duct Tape: NAT, CGNAT, and Quiet Desperation

Enter NAT (Network Address Translation) -- the clever hack that lets hundreds of devices hide behind a single public IP address. Your home router does this right now. Your phone, laptop, smart fridge, and that IoT toaster you regret buying all share one public address.

Then ISPs took it further with CGNAT (Carrier-Grade NAT) -- NAT on top of NAT. It's like putting a band-aid on a band-aid and calling it surgery. It works, technically. But it adds latency, breaks peer-to-peer connections, and turns troubleshooting into an archaeological dig.

"Just trace the IP."
"Which one? There are four layers of NAT."
*[distant screaming]*

## IPv6: The Hero That Never Showed Up

IPv6 was supposed to save us. Designed in the 1990s, it expanded the address space to 128 bits -- enough addresses to give every atom on Earth its own IP, with plenty left over for the atoms' pets.

The problem? IPv6 is essentially a **different protocol**. It doesn't play nice with IPv4 out of the box. The solution was "dual-stack" -- run both protocols on everything, everywhere, simultaneously, forever.

After **25+ years** of deployment effort, IPv6 still carries a minority of global internet traffic. Turns out, asking every device, every application, every network, and every sysadmin on the planet to support two protocols simultaneously was... commercially unacceptable. Who could have predicted that? (Everyone. Everyone predicted that.)

## Enter IPv8: "What If We Just... Didn't Break Everything?"

In April 2026, an IETF Internet-Draft landed proposing **Internet Protocol Version 8 (IPv8)**. And its core pitch is almost suspiciously elegant:

> **IPv4 is a proper subset of IPv8. No existing device, application, or network requires modification.**

Here's how it works.

### The Address: 64 Bits, Two Halves

An IPv8 address looks like this:

```
r.r.r.r.n.n.n.n
```

- **r.r.r.r** (32 bits) -- the ASN Routing Prefix. This identifies *which network organization* the address belongs to.
- **n.n.n.n** (32 bits) -- the Host Address. This is... just a regular IPv4 address.

The magic trick: **if r.r.r.r is 0.0.0.0, you've got a plain IPv4 address.** The old world lives inside the new one. No flag day. No forced migration. Your grandma's ancient router doesn't need a firmware update.

Each ASN (Autonomous System Number -- basically every ISP, cloud provider, and large organization has one) gets its own full 4.3 billion host addresses. Address exhaustion? Solved, almost as a side effect.

### The Zone Server: One Ring to Rule Them All

Here's where IPv8 gets opinionated -- and honestly, kind of refreshing.

Today, managing a network means juggling a dozen separate tools: DHCP for addresses, DNS for names, NTP for time, syslog for logging, SNMP for monitoring, RADIUS/TACACS for auth -- all independently configured, independently licensed, and independently broken at 3 AM on a Saturday.

IPv8 introduces the **Zone Server** -- an active/active pair that runs *everything*: address assignment, name resolution, time sync, logging, authentication, route validation, access control, and IPv4/IPv8 translation.

A device connects. Sends one DHCP8 request. Gets back every service endpoint it needs. Done. Authenticated, logged, time-synced, policy-enforced. Before the user even touches it.

It's the networking equivalent of a Swiss Army knife, except this one actually includes a good bottle opener.

### Security That's Built In, Not Bolted On

IPv8 tackles security from two directions:

**East-West (inside the network):** Devices can only talk to their designated gateway. There's no route to other devices. Lateral movement -- the bread and butter of network attackers -- is structurally impossible. Not "blocked by a firewall rule someone might misconfigure," but "the route literally doesn't exist." Three enforcement layers deep: NIC firmware, Zone Server, and switch port hardware.

**North-South (to the internet):** Every outbound connection must:
1. Have a DNS lookup (no DNS resolution = connection blocked)
2. Pass a WHOIS8 validation (destination must be a legitimately registered network)

This kills a classic malware trick: connecting to a hard-coded IP address for command-and-control. No DNS lookup, no connection. Simple, brutal, effective.

### The Routing Table Gets a Diet

The current BGP routing table -- the global "map" that routers use to find each other -- has over 900,000 entries and is growing without any limit. IPv8 caps it: one entry per ASN, enforced by a /16 minimum prefix rule. That's roughly 175,000 entries. Your border router just let out a sigh of relief.

Route advertisements are also validated against a WHOIS8 registry. Can't prove you own a prefix? Your advertisement gets rejected. Route hijacking becomes architecturally difficult instead of embarrassingly easy.

Oh, and the new routing metric (Cost Factor) includes a **speed-of-light physics floor**. If a path claims to be faster than light over that distance, it gets flagged as an anomaly. Because apparently, we now need to check if our network paths violate the laws of physics.

## The Transition: No Big Bang Required

This is where IPv8 takes a direct shot at IPv6's biggest failure. The transition plan:

1. **Tier 1/2 ISPs** upgrade routers (software update -- no hardware swap)
2. **Cloud providers** adopt internally
3. **Enterprises** optionally grab ASN prefixes
4. **Consumer ISPs** adopt

Each phase is independent. Nobody waits for anyone else. **8to4 tunneling** (IPv8 wrapped in HTTPS) lets IPv8 "islands" talk across IPv4-only networks in the meantime. And here's the clever economic incentive: the Cost Factor metric naturally measures higher latency on tunneled paths, so IPv4-only transit networks see a measurable performance penalty. No mandate needed -- just math gently pushing everyone forward.

## So... Will It Actually Happen?

Let's be real: this is an Internet-Draft, not a deployed standard. It needs to survive IETF review, gain vendor support, and convince a planet-sized installed base that this time, upgrading is worth it.

But the pitch is strong. IPv8 doesn't ask the world to change -- it wraps the existing world in a bigger, better-managed one. Your legacy IPv4 gear works on day one. Your new gear gets authentication, telemetry, route validation, and 18 quintillion addresses.

IPv6 said "rebuild everything." IPv8 says "keep everything, and here's a better roof."

Whether it succeeds depends on whether the networking industry has the appetite for another protocol transition -- or whether we're all just too comfortable with our duct tape.

---

*This analysis is based on [draft-thain-ipv8-00](https://www.ietf.org/archive/id/draft-thain-ipv8-00.html), published April 14, 2026. It's an Internet-Draft -- a work in progress, not an approved standard.*
