import dash
import dash_core_components as dcc
import dash_html_components as html
from dash.dependencies import Input, Output
import plotly.express as px
import pandas as pd

app = dash.Dash(__name__)

# Load your data into a DataFrame
melted_df = pd.read_csv("sample.csv")


# Create lists of unique values for each filter
species_list = melted_df["Species"].dropna().unique()
# Year_list = sorted(melted_df["Year"].dropna().unique())
age_group_list = melted_df["Age Group"].dropna().unique()
gender_list = melted_df["Gender"].dropna().unique()
antbio_list = melted_df["antibiotic"].dropna().unique()
Year_list = sorted([2013, 2014, 2005, 2015])

# Create list of antibiotic columns

# ANB_a = [
#     "AMPC",
#     "SHV",
#     "TEM",
#     "CTXM1",
#     "CTXM2",
#     "CTXM825",
#     "CTXM9",
#     "VEB",
#     "PER",
#     "GES",
#     "ACC",
#     "CMY1MOX",
#     "CMY11",
#     "DHA",
#     "FOX",
#     "ACTMIR",
#     "KPC",
#     "OXA",
#     "NDM",
#     "IMP",
#     "VIM",
#     "SPM",
#     "GIM",
# ]
# columns_ending_with_I = df.filter(regex="_I$", axis=1).columns.to_list()
# antbio_list = columns_ending_with_I
# + ANB_a

# melted_df = pd.melt(
#     df,
#     id_vars=["Year", "Species", "Age Group", "Gender"],
#     value_vars=df.columns[4:10],
#     var_name="antibiotic",
# )
# # melted_df.dropna(axis=1, how="all")
# melted_df.dropna(axis=1)


# antbio_list = df.columns[4:10]

app.layout = html.Div(
    [
        # Dropdowns to select filters
        html.Div(
            [
                html.Label("Species"),
                dcc.Dropdown(
                    id="species-dropdown",
                    options=[{"label": i, "value": i} for i in species_list],
                    value=None,  # species_list[0],
                    # multi=True,
                ),
            ],
            style={"display": "inline-block", "margin-right": "40px", "width": "150px"},
        ),
        html.Div(
            [
                html.Label("Year"),
                dcc.Dropdown(
                    id="Year-dropdown",
                    options=[{"label": i, "value": i} for i in Year_list],
                    value=None,
                    # multi=True,
                ),
            ],
            style={"display": "inline-block", "margin-right": "40px", "width": "100px"},
        ),
        html.Div(
            [
                html.Label("Age Group"),
                dcc.Dropdown(
                    id="age-group-dropdown",
                    options=[{"label": i, "value": i} for i in age_group_list],
                    value=None,
                ),
            ],
            style={"display": "inline-block", "margin-right": "40px", "width": "150px"},
        ),
        html.Div(
            [
                html.Label("Gender"),
                dcc.Dropdown(
                    id="gender-dropdown",
                    options=[{"label": i, "value": i} for i in gender_list],
                    value=None,
                ),
            ],
            style={"display": "inline-block", "margin-right": "40px", "width": "150px"},
        ),
        html.Div(
            [
                html.Label("Antibiotic"),
                dcc.Dropdown(
                    id="antibiotic-dropdown",
                    options=[{"label": i, "value": i} for i in antbio_list],
                    value=None,
                ),
            ],
            style={"display": "inline-block", "margin-right": "40px", "width": "150px"},
        ),
        # Output graphs
        html.Div(
            [
                dcc.Graph(id="amr-graph1"),
                dcc.Graph(id="amr-graph2"),
                dcc.Graph(id="amr-graph3"),
            ]
        ),
    ],
    # style={'justifyContent': 'center', 'backgroundColor': '#00f'},
)


@app.callback(
    [
        Output("amr-graph1", "figure"),
        Output("amr-graph2", "figure"),
        Output("amr-graph3", "figure"),
    ],
    [
        Input("species-dropdown", "value"),
        Input("Year-dropdown", "value"),
        Input("age-group-dropdown", "value"),
        Input("gender-dropdown", "value"),
        Input("antibiotic-dropdown", "value"),
    ],
)
def update_graphs(
    selected_species,
    selected_Year,
    selected_age_group,
    selected_gender,
    selected_antibiotic,
):
    # filtered_df = df[
    #     (df["Species"] == selected_species)
    #     & (df["Year"].isin(Year_list))
    #     & (df["Age Group"] == selected_age_group)
    #     & (df["Gender"] == selected_gender)
    # ]
    # Filter data by selected filters
    # if selected_Year:
    #     filtered_df = melted_df[
    #         (melted_df["Species"] == selected_species)
    #         & (melted_df["Year"] == selected_Year)
    #         & (melted_df["Age Group"] == selected_age_group)
    #         & (melted_df["Gender"] == selected_gender)
    #         & (melted_df["antibiotic"] == selected_antibiotic)
    #     ]
    if (
        selected_Year
        and selected_species
        and selected_age_group
        and selected_gender
        and selected_antibiotic
    ):
        filtered_df = melted_df[
            (melted_df["Species"] == selected_species)
            & (melted_df["Year"] == selected_Year)
            & (melted_df["Age Group"] == selected_age_group)
            & (melted_df["Gender"] == selected_gender)
            & (melted_df["antibiotic"] == selected_antibiotic)
        ]

    elif selected_antibiotic:
        filtered_df = melted_df[
            (melted_df["Species"].isin(species_list))
            & (melted_df["Year"].isin(Year_list))
            & (melted_df["Age Group"].isin(age_group_list))
            & (melted_df["Gender"].isin(gender_list))
            & (melted_df["antibiotic"] == selected_antibiotic)
        ]
    elif selected_species and selected_antibiotic:
        filtered_df = melted_df[
            (melted_df["Species"] == selected_species)
            & (melted_df["Year"].isin(Year_list))
            & (melted_df["Age Group"].isin(age_group_list))
            & (melted_df["Gender"].isin(gender_list))
            & (melted_df["antibiotic"] == selected_antibiotic)
        ]
    else:
        filtered_df = melted_df[
            (melted_df["Species"].isin(species_list))
            & (melted_df["Year"].isin(Year_list))
            & (melted_df["Age Group"].isin(age_group_list))
            & (melted_df["Gender"].isin(gender_list))
            & (melted_df["antibiotic"].isin(antbio_list))
        ]

    # Drop columns with all NaN values
    # filtered_df = filtered_df.dropna(axis=1, how="all")
    # filtered_df = melted_df.dropna(axis=1, how="all")

    # Melt data to long format for plotting
    # melted_df = pd.melt(
    #     df,
    #     id_vars=["Year", "Species", "Age Group", "Gender"],
    #     value_vars=df.columns[4:10],
    #     var_name="antibiotic",
    # )

    # Group data by Year and antibiotic
    grouped_df1 = (
        melted_df.groupby(["Year", "antibiotic", "value"])
        .size()
        .reset_index(name="count")
    )

    # Create first plot
    fig1 = px.bar(
        grouped_df1, x="Year", y="count", color="value", labels={"value": "Observation"}
    )
    fig1.update_layout(
        xaxis=dict(
            type="category",
            categoryorder="array",
            categoryarray=Year_list,  # Specify the order of the years here
        ),
        barmode="group",  # Change the barmode to 'group' for separate bars
        bargap=0.6,
        # yaxis=dict(range=[0, grouped_df1["count"].min() * 0.8]),
    )

    # Group data by Year and age group
    grouped_df2 = (
        filtered_df.groupby(["Year", "Age Group"]).size().reset_index(name="count")
    )

    # Create second plot
    fig2 = px.bar(grouped_df2, x="Year", y="count", color="Age Group")
    fig2.update_layout(
        xaxis=dict(
            type="category",
            categoryorder="array",
            categoryarray=Year_list,  # Specify the order of the years here
        ),
        barmode="group",  # Change the barmode to 'group' for separate bars
        bargap=0.6,
        # yaxis=dict(range=[0, grouped_df1["count"].min() * 0.8]),
    )
    grouped_df3 = (
        filtered_df.groupby(["Year", "Gender"]).size().reset_index(name="count")
    )
    fig3 = px.bar(grouped_df3, x="Year", y="count", color="Gender")
    fig3.update_layout(
        xaxis=dict(
            type="category",
            categoryorder="array",
            categoryarray=Year_list,  # Specify the order of the years here
        ),
        barmode="group",  # Change the barmode to 'group' for separate bars
        bargap=0.6,
        # yaxis=dict(range=[0, grouped_df1["count"].min() * 0.8]),
    )

    return fig1, fig2, fig3


if __name__ == "__main__":
    app.run_server(debug=True)
