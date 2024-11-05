class InvalidConfig(Exception):
    pass


TEMPLATE = """Promote:
{promote}

Relegate:
{relegate}"""


def get_results(division, n) -> str:
    if n > len(division) // 2:
        raise InvalidConfig()
    ordered = sorted(division, key=lambda x: x["points"], reverse=True)
    return TEMPLATE.format(
        promote="\n".join([team["name"] for team in ordered[:n]]),
        relegate="\n".join([team["name"] for team in ordered[-n:]]),
    )
