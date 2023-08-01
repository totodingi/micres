from dash import Dash, html, dcc, callback, Output, Input
import plotly.express as px
import pandas as pd

df = pd.read_csv('https://raw.githubusercontent.com/plotly/datasets/master/gapminder_unfiltered.csv')

app = Dash(__name__)

app.layout = html.Div([
    html.H1(children='MICRES', style={'textAlign': 'center', 'fontSize': '40px', 'margin': '20px'}),
    html.P(' Bridging the Gap in Antimicrobial Resistance Decision-Making',
           style={'fontSize': '25px', 'textAlign': 'center'})
], style={'backgroundColor': '#ffafff', 'height': '100vh', 'borderRadius': '30px'})


@callback(
    Output('graph-content', 'figure'),
    Input('dropdown-selection', 'value')
)
def update_graph(value):
    dff = df[df.country == value]
    return px.line(dff, x='year', y='pop')


if __name__ == '__main__':
    app.run(debug=True)
